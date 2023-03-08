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
  echo "Unit tests execution passed."
  echo "Unit tests execution passed." > ../comment/comment
fi
