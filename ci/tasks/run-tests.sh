#!/bin/bash

echo "Installing packages"
yarn install

UNIT_TEST_STATUS=0

echo "Running unit tests"
yarn test || UNIT_TEST_STATUS=$?

if [[ ${UNIT_TEST_STATUS} != 0 ]]; then
  echo "Unit tests execution failed."
  echo "Unit tests execution failed." > ../comment/comment
  echo "Done"
  exit 1
else
  echo "Unit tests execution passed. Proceeding with Cypress sanity tests execution."
  echo "Unit tests execution passed." > ../comment/comment

  echo "present working directory"
  pwd
  ls -lrt

  echo "VRT_APIURL='https://vrt-api-dev.devplat.comcast.com'
  VRT_APIKEY=${VRT_APIKEY}
  VRT_PROJECT=${VRT_PROJECT}
  VRT_BRANCHNAME=$(ls .git/refs/heads)
  VRT_CIBUILDID=$(cat .git/ref)
  VRT_ENABLESOFTASSERT=false" > .env

  cat .env

  SANITY_TEST_STATUS=0

  # Start Xvfb in background
  Xvfb -screen 0 2560x1440x24 :99 &
  export DISPLAY=:99

  aws --version

  # Verify Cypress
  yarn run cy:info
  yarn run cy:verify

  echo "Kickstarting the Automation Execution"
  # Start the Execution Timer
  start_time=$(date +"%b %d %Y, %a %H-%M-%S %Z")

  echo "Execution starts : $start_time"
  yarn run cy:preTestsExec
  yarn run cy:launchAppAndRunSanityVrtTestsParallel
  yarn run cy:postTestsExec

  FILE=cypress/reports/index.html
  JSON=cypress/reports/output.json

  if [[ -f "$FILE" && -f "$JSON" ]]; then
    echo "Report html and json are generated at cypress/reports"
  else
    echo "Report html and json does not exist at cypress/reports"
    exit 0
  fi

  SANITY_TEST_STATUS=$(jq '.stats.failures' cypress/reports/output.json)

  echo "Automation Execution and Report Generation Completed. Posting Test Results"

  # Kill Xvfb
  pkill Xvfb

  date=$(date +"%b-%d-%Y-%a-%H-%M-%S-%Z")
  echo "Reports folder in S3 Bucket: $date"

  echo "Copying reports to S3 Bucket ${S3_BUCKET}..."

  S3_PATH="s3://${S3_BUCKET}"

  BUCKET_EXISTS=$(aws s3api head-bucket --bucket ${S3_BUCKET} 2>&1 || true)
  if [ -z "$BUCKET_EXISTS" ]; then
    echo "S3 Bucket ${S3_BUCKET} exists"
  else
    echo "S3 Bucket ${S3_BUCKET} does not exist"
    exit 0
  fi

  # Copy videos directory to s3's logical date directory
  echo "Copying videos to S3 Bucket"
  aws s3 sync cypress/videos/ ${S3_PATH}/${date}/assets/videos

  # Exporting the date env variable to use it in our lui-tests.devplat report to upload videos from s3
  export REPORT_DATE=${date}
  echo "Replacing REPORT_DATE string by actual date"
  yarn run report:add:video

  # Copy reports directory to s3's logical date directory
  aws s3 cp cypress/reports/index.html ${S3_PATH}/${date}/index.html
  aws s3 ls ${S3_PATH}/${date}
  echo "Setting cache-control for index.html"
  aws s3 cp \
    "${S3_PATH}/${date}/index.html" \
    "${S3_PATH}/${date}/index.html" \
    --metadata-directive REPLACE \
    --cache-control max-age=0,no-cache \
    --content-type "text/html"

  echo "Reports copied to S3 Bucket !!!"

  REPORT_LINK="https://lui-tests.devplat.comcast.com/${date}/index.html"
  echo "Test Execution Reports are available at: ${REPORT_LINK}"

  node cypress/support/parseResults.js time:"${start_time}" report:"${REPORT_LINK}" type:"parallel"

  if [[ ${SANITY_TEST_STATUS} != 0 ]]; then
    echo "Cypress Sanity and VRT Sanity Tests Execution Failed."
    echo "Cypress Sanity and VRT Sanity Tests Execution Failed.
    Reports are available at: ${REPORT_LINK}" >> ../comment/comment
  else
    echo "Cypress Sanity and VRT Sanity Tests Execution Passed."
    echo "Cypress Sanity and VRT Sanity Tests Execution Passed.
    Reports are available at: ${REPORT_LINK}" >> ../comment/comment
  fi

  echo "Done"
  exit 0
fi
