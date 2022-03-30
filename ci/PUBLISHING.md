# Publishing Releases With Semantic Release

Pushing commits to the `main` branch will trigger a release on the `@latest` tag. Pushing commits to the `next` branch will trigger a release on the `@next` tag. If you want to target a commit to a specific major/minor version tree, you can do so following the [maintenance release pattern](https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/maintenance-releases.md#publishing-maintenance-releases) in Semantic Release. For example, if you need to make a patch release off of the tag `v1.0.0`, you can do so by pushing the necessary commit to a maintenance branch, like `1.x`. If the branch you are looking for doesn't exist, you'll need to follow the steps below to setup publishing to a new maintenance branch.

> **NOTE**: The following steps require quite a bit of repetitive work. It isn't difficult but too many maintenance branches could get unwieldy. Use your discretion to determine whether a new maintenance branch is really necessary before jumping in.

## New Maintenance Release Branch

### Step 1 - Create a Git Branch

Create a new branch off of the release tree you are targeting.

```sh
git checkout -b 1.x v1.0.0
```

In the above example, the branch `1.x` will be targeting release `v1.0.0` . If you want to target a specific minor release tree, let's say `v1.2.0`, you would do

```sh
git checkout -b 1.2.x v1.2.0
```

Push the branch and set branch protection rules if you have privileges to do so.

### Step 2 - Check Release Configuration

Go to `.releaserc` and make sure that your intended branch is covered in the `branches` array. Anything alphanumeric version branches should be covered already, like `1.x` or `1.0.x`. If you are creating a named branch, like `next-major`, you will need to add that in the array.

### Step 3 - Create Concourse Pipeline Job

In order for releases to be triggered for this branch, you need to create a new **resource** and **job** in `ci/pipeline.yml` of the project. This part has a few sub-steps and may require a few tries before you get it right. The good news is it should be mostly copy/paste.

> **NOTE**: these steps involving skipping around and copy/pasting in a large yaml file. Be wary of indentation, it _really_ matters!

#### 1 - Create a resource

Under the **resources** section of `pipeline.yml`, add a resource for your branch and give it a name. You can copy off of the `source-repo` resource, which looks like:

```yml
  - name: source-repo
    type: git
    webhook_token: ((webhook-token))
    check_every: 168h
    source:
      branch: main
      private_key: ((github-enterprise.private-key))
      uri: ((ghe-source-repo))
```

Just replace `name: source-repo` with whatever you want to call it, like `source-repo-1x`, and `branch: main` with your branch name.

```yml
  - name: source-repo-1x # new name
    type: git
    webhook_token: ((webhook-token))
    check_every: 168h
    source:
      branch: 1.x # new branch
      private_key: ((github-enterprise.private-key))
      uri: ((ghe-source-repo))
```

#### 2 - Create a job

Under the **jobs** section of `pipeline.yml`, add a publish job for your branch. You can copy from the `Publish` job, which looks like this:

```yml
- name: Publish
  build_logs_to_retain: 50
  plan:
    - get: source-repo
      trigger: true
    - task: Version and Publish
      file: source-repo/ci/tasks/publish.yml
      input_mapping:
        source-repo: source-repo
      params:
        HOST: ((github-enterprise.host))
        PRIVATE_KEY: ((github-enterprise.private-key))
        USERNAME: ((service-account.username))
        NPM_USERNAME: ((service-account.artifactory-username))
        NPM_EMAIL: ((service-account.email))
        NPM_PASSWORD: ((service-account.artifactory-api-key))
```

Similar to what you did in the **resource** section, you will want to change the `name`, `get`, `file`, and `input_mapping.source-repo` values like so:

```yml
- name: Publish 1.x # new name
  build_logs_to_retain: 50
  plan:
    - get: source-repo-1x # new resource name
      trigger: true
    - task: Version and Publish
      file: source-repo-1x/ci/tasks/publish.yml # new resource name
      input_mapping:
        source-repo: source-repo-1x # new resource name
      params:
        HOST: ((github-enterprise.host))
        PRIVATE_KEY: ((github-enterprise.private-key))
        USERNAME: ((service-account.username))
        NPM_USERNAME: ((service-account.artifactory-username))
        NPM_EMAIL: ((service-account.email))
        NPM_PASSWORD: ((service-account.artifactory-api-key))
```

Be careful _not_ to change the key `source-repo` under `input_mapping` or concourse will fail to find the source with an error like:

```
missing inputs: source-repo
```

#### 3 - Add Job to Group

Under the **groups** section of `pipeline.yml`, add the job name you just created under the **jobs** list of a group, most likely `Overview`. It should look something like this:

```yml
groups:
  - name: Overview
    jobs:
      - Pull Requests
      - Docs
      - Publish
      - Publish Next
      - Publish 1.x # new job name
  - name: Pull Requests
    jobs:
      - Pull Requests
```

#### 4 - Commit changes

If you haven't already, create a new feature branch then commit the change.

```sh
git checkout -b chore/1.x
git add .
git commit -m 'chore: add 1.x publish job'
git push -u origin chore/1.x
```

#### 5 - Set pipeline in Concourse

Any changes to `pipeline.yml` need to be updated in Concourse using the [fly CLI](https://concourse-ci.org/fly.html). If you don't have the `fly` command installed and/or have never logged into `ci.comcast.net`, [follow the instructions here](https://better.delivery.comcast.net/docs/site/gettingstarted/ciaccess/) to get started. After downloading `fly`, you may have to manually move it to `/usr/local/bin/fly` with execute access (`chmod 0755`).

To login, you will need to run the following command:
```sh
fly --target ci login --concourse-url https://ci.comcast.net --team-name lightning --open-browser
```

To trigger changes, run the following command:

```sh
fly -t ci set-pipeline -p lightning-ui --config ci/pipeline.yml --load-vars-from ci/values.yml
```

Below is an example of the expected output. **Make sure that the updates look correct**

```sh
groups:
  group Overview has changed:
  jobs:
  - Pull Requests
  - Docs
  - Publish
  - Publish Next
+ - Publish 1.x
  name: Overview

resources:
  resource source-repo-1x has been added:
+ check_every: 168h
+ name: source-repo-1x
+ source:
+   branch: 1.x
+   private_key: ((github-enterprise.private-key))
+   uri: git@github.comcast.com:Lightning/lightning-ui.git
+ type: git
+ webhook_token: ((github-enterprise.webhook-token))

jobs:
  job Publish 1.x has been added:
+ build_logs_to_retain: 50
+ name: Publish 1.x
+ plan:
+ - get: source-repo-1x
+   trigger: true
+ - file: source-repo-1x/ci/tasks/publish.yml
+   input_mapping:
+     source-repo: source-repo-1x
+   params:
+     HOST: ((github-enterprise.host))
+     NPM_EMAIL: ((service-account.email))
+     NPM_PASSWORD: ((service-account.artifactory-api-key))
+     NPM_USERNAME: ((service-account.artifactory-username))
+     PRIVATE_KEY: ((github-enterprise.private-key))
+     USERNAME: ((service-account.username))
+   task: Version and Publish
```

Once that step is complete, you should be able to navigate to `https://ci.comcast.net/teams/lightning/pipelines/lightning-ui` and see your new job!

### Step 4 - Create GitHub Hooks

First, make sure your chore commit is added to your maintenance branch.

Navigate to https://github.comcast.com/Lightning/lightning-ui/settings/hooks, and if you have permissions, hit the **Add web hook** button. In the **Payload URL** input, enter `https://ci.comcast.net/api/v1/teams/lightning/pipelines/lightning-ui/resources/<source-repo-name>/check/webhook?webhook_token=<webhook-token>` where `<source-repo-name>` is the name of the source repo, (e.g. `source-repo-1x` in the example we have followed) and `<webhook-token>` can be copied from any of the other available hooks on the hooks settings page. Leave all of the other settings as default, then hit **Update webhook**, and that should be it! Now pushing new commits with conventional commit messages to your maintenance branch should automatically trigger publishes.
