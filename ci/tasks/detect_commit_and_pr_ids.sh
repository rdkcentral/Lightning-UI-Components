#!/bin/bash

# This task script provides a generic means of detecting the pull request and
# commit IDs from a `teliaoss/github-pr-resource` pull request.
#
# It offers the following output files for use in downstream tasks:
#   commit-id/id
#   pull-request-id/id
#
# It assumes a codebase has been passed with an input mapping of `source-repo`
#
# Example:
#
#  - task: detect-commit-and-pr-ids
#    file: lightning-ui/ci/tasks/detect_commit_and_pr_ids.yml

set -e -o pipefail
set +x

jq -r .commit source-repo/.git/resource/version.json > commit-id/id
jq -r .pr source-repo/.git/resource/version.json > pull-request-id/id
cat source-repo/.git/resource/title > pull-request-title/title

echo "commit ID: $(cat commit-id/id)"
echo "PR ID: $(cat pull-request-id/id)"
echo "title: $(cat pull-request-title/title)"
echo "https://github.comcast.com/Lightning/lightning-ui/pull/$(cat pull-request-id/id)"

if [ $(cat pull-request-title/title | grep -Eoc '^(feat|fix|chore|docs|test|build)(\([a-z,A-Z]+\))?: .{1,100}+$') -eq 0 ]; then # https://regex101.com/r/swQ454/1
  echo "PR title does not comply with conventional commits"
  echo "PR title does not comply with conventional commits: $(cat pull-request-title/title)" > comment/comment
  exit 1
fi
