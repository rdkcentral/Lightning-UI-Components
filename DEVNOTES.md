# DEV NOTES

This is a shared scratchpad where we can track notes on configs, weirdness, etc. things that can't be easily tagged in a comment.

## Semantic Release

When working off of the `next` branch, in order to get the latest code from the `develop` branch, we have been `rebasing`. This allows all of the next commmits to be stacked on top of the develop commits.

### Rebasing

```
git checkout develop
git fetch origin
git pull origin develop
get checkout next
git pull origin next
git rebase -i origin/develop
```
Follow normal rebase steps to resolve merge conflicts. For any merge conflicts in package.json related to `version`, always take the incoming `next` changes, not version numbers from `develop`.

### Resolving new Tags and Notes

First, you will need to ensure you can view the "notes" for the tags.

Notes are not automatically pulled down when you clone a repo, so you will need to manually fetch them:
```
git fetch origin 'refs/notes/*:refs/notes/*'
```

You can confirm that the notes are now working by printing out the semantic-release notes for a given tag
```
git notes --ref semantic-release show vVERSION_NUMBER
```

For example:
```
git notes --ref semantic-release show v5.0.0-next.19
```

You should see something like `{"channels":["next"]}`.

For more information about Git Notes: https://git-scm.com/docs/git-notes

For more information about Git Tags: https://git-scm.com/docs/git-tag

#### Update the Tag

Next, find the new commit hash for the most recent chore release commit on `next` (you can run `git log`). Copy that commit to your clipboard or save it somewhere else to easily grab in a few steps.

Then, update that tag's associated commit
```
git tag -a vVERSION_NUMBER NEW_COMMIT_HASH -f
```

For example:
```
git tag -a v5.0.0-next.19 43726051b51f0a2056312ec5488af03984d8b2d8 -f
```

Then, force push up the tag change:
```
git push origin -f vVERISON_NUMBER
```

For example:
```
git push origin -f v5.0.0-next.19
```

#### Update the Note

Next, update the associated note to reference next again.
```
git notes --ref semantic-release add -m "{\"channels\":[\"next\"]}" vVERSION_NUMBER
```

For example:
```
git notes --ref semantic-release add -m "{\"channels\":[\"next\"]}" v5.0.0-next.19
```

Push up the notes change:
```
git push origin 'refs/notes/*:refs/notes/*'
```

#### Push Up

Lastly, push up the rebased version of `next`. NOTE: You may need to update the branch protection rules in GitHub "Settings" to "Allow force pushes":
```
git push origin -f next
```

**NOTE:** If a new Concourse job does not automatically run after, simply hit the "Trigger Build" icon in the upper right corner (Plus Sign) on the [`publish-next` job](https://ci-alpha.delivery.comcast.net/teams/lightning/pipelines/lightning-ui/jobs/publish-next/).
