<!--
  Copyright 2023 Comcast Cable Communications Management, LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  SPDX-License-Identifier: Apache-2.0
-->

# Branching Strategy

This file defines the branching strategy used by the 'lightning-ui-components' repo.

## Branches

- `develop`
  - our "source of truth" branch
  - new branches are checked out off and PR'd against it
  - when a PR is merged the pipeline will publish a prerelease package
- `release`
  - tracks our latest stable release
  - publishes a new package when changes are pushed to this branch
- `feature`/`fix`/`chore`/`test`
  - feature branches
  - branched off of and merged back into `develop`

## Development flow
All development should be done in feature branches (named with the appropriate prefix). When development is done, changes will be merged back into `develop` via a PR. To publish a new release, the dev in charge of cutting releases will merge the changes from `develop` into `release` locally, and publish the updated branch to `origin release`. This will kick off the CI pipeline and publish a new stable build to Artifactory, versioned according to `semantic-release`.

**Why don't we have a `main` branch?**

It feels like unnecessary extra work to worry about merging things back and into `main` after publishing to `release` when really, `develop` is our source of truth and `release` tracks our code out in the wild. `develop` could be called `main`, however we decided to "call it what it is" and felt `develop` more accurately reflects the purpose of this branch.
