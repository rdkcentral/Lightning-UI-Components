const { exec } = require('node:child_process');
const package = require('../../package.json');
const { lastRelease } = require('./.release.json');
const fs = require('fs');
const path = require('path');
const slackNotification = {
  color: '#3CB371',
  blocks: []
};
const releaseVersions = [];

/**
 * Determine what the hightest SemVer is
 * @param {string} currentType - Current type of conventional commit
 * @param {string} newType - New type that you are proposing for comparison
 * @return {string} The highest SemVer type only major | minor | patch
 */
function getHighestConventionalCommit(currentType = '', newType = '') {
  const currentLowerCase = currentType.toLowerCase();
  const newTypeLowerCase = newType.toLowerCase();

  if (
    ['major'].includes(currentLowerCase) ||
    ['major'].includes(newTypeLowerCase)
  ) {
    return 'major';
  } else if (
    ['minor'].includes(currentLowerCase) ||
    [
      'feat',
      'build',
      'ci',
      'perf',
      'revert',
      'test',
      'docs',
      'style',
      'refactor',
      'perf',
      'test'
    ].includes(newTypeLowerCase)
  ) {
    return 'minor';
  } else if (
    ['patch'].includes(currentLowerCase) ||
    ['fix', 'chore'].includes(newTypeLowerCase)
  ) {
    return 'patch';
  } else {
    return 'minor';
  }
}

/**
 * Promisify exec
 * @param {string} command - Shell command to execute
 * @return {Promise} - Promise that resolves the output of the command
 */
function execPromise(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, output) => {
      if (err) {
        console.error(`exec error: ${err}`, output);
        reject(err.message);
      }
      resolve(output);
    });
  });
}

/**
 * Get list of commit information since last release
 * @return {array} - Array of objects containing hash, type, and scope of each commit
 */
async function fetchCommits() {
  const commits = await execPromise(
    `git log --pretty=oneline ${lastRelease}...HEAD`
  );
  const conventionalCommitRegExp = /^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test){1}(\([\w\-\.]+\))?(!)?: ([\w ])+([\s\S]*)/;
  return commits
    .split(/\n/)
    .filter(Boolean)
    .map(commit => {
      const hash = commit.split(/\s/)[0];
      const commitMessage = commit.replace(/^\S+\s/, '');
      const [_, type = 'minor', scope = '', breaking] = commitMessage
        ? conventionalCommitRegExp.exec(commitMessage) || []
        : [];
      return {
        hash,
        type: breaking ? 'major' : type,
        message: commitMessage.split(':').pop().trim(),
        scope: scope.replace(/\(|\)/g, '')
      };
    });
}

/**
 * Triggers SemVer bump for workspace and triggers deployment script for each
 * @return {promise} - Promise that resolves when the version has been incremented and the release has been triggered
 */
async function updateWorkspaceSemVer(workspace, info) {
  await execPromise(
    `yarn workspace ${workspace} exec npm version ${info.type} --no-git-tag-version`
  ).then(response => console.log(`[${workspace}: update version] ${response}`));
}

/**
 * Each workspace will run commands required for release and simulate a release via the pack command
 */
async function releaseWorkspace(workspace, info) {
  await execPromise(
    `yarn workspace ${workspace} run build || true`
  ).then(response => console.log(`[${workspace}: build] ${response}`)); // Run build command if exists
  await execPromise(
    `yarn workspace ${workspace} exec yarn node ./scripts/pre.mjs || true`
  ).then(response => console.log(`[${workspace}: run pre script] ${response}`)); // Some builds may need additional steps ex. For @lightning/ui we will remove "type": "module"
  await execPromise(
    `yarn workspace ${workspace} exec yarn npm publish --tolerate-republish`
  ).then(response => console.log(`[${workspace}: publish] ${response}`)); // Replace with yarn npm publish when ready to actually release
  await execPromise(
    `yarn workspace ${workspace} exec yarn node ./scripts/post.mjs || true`
  ).then(response =>
    console.log(`[${workspace}: run post script] ${response}`)
  ); // Revert any changes that may have been made by pre scripts
  // Fetch newest version of package JSON with new SemVer
  delete require.cache[
    require.resolve('../../packages/' + workspace + '/package.json')
  ];
  const { name, version } = require('../../packages/' +
    workspace +
    '/package.json');

  await generateTag(name, version, info.commitList);
  await generateSlackChangelog(name, version, info.commitList);
}

async function generateTag(name, version, commits) {
  console.log(`git tag ${name}@${version}`);
  releaseVersions.push(`${name}@${version}`);
  await execPromise(`git tag ${name}@${version}`);
}

/**
 * For each release a block will be created to send a notification to Slack
 */
async function generateSlackChangelog(name, version, commits) {
  if (slackNotification.blocks.length) {
    slackNotification.blocks.push({
      type: 'divider'
    });
  }

  const features = commits
    .filter(commit => commit.type === 'feat')
    .map(({ message }) => '• ' + message);

  const fixes = commits
    .filter(commit => commit.type === 'fix')
    .map(({ message }) => '• ' + message);

  const header = {
    type: 'header',
    text: {
      type: 'plain_text',
      text: `:rocket: ${name} v${version}`
    }
  };

  let section = {};

  if (features.length || fixes.length) {
    section = {
      type: 'section',
      fields: []
    };
  }

  if (features.length) {
    section.fields.push({
      type: 'mrkdwn',
      text: `*Features*\n${features.join('\n')}`
    });
  }

  if (fixes.length) {
    section.fields.push({
      type: 'mrkdwn',
      text: `*Bug Fixes*\n${fixes.join('\n')}`
    });
  }

  slackNotification.blocks.push(header);

  if (features.length || fixes.length) slackNotification.blocks.push(section);

  slackNotification.blocks.push({
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: `<https://github.comcast.com/Lightning/lightning-ui/releases/tag/${name}@${version}|View release in github>`
    },
    accessory: {
      type: 'button',
      text: {
        type: 'plain_text',
        text: 'View',
        emoji: true
      },
      url: `https://github.comcast.com/Lightning/lightning-ui/releases/tag/${name}@${version}`,
      action_id: 'button-action'
    }
  });
}

/**
 * Save JSON file of payload that will be consumed to send notification to Slack
 */
function saveSlackNotificationJSON() {
  fs.mkdir(path.join(process.cwd(), 'ci-files'), {}, err => {
    fs.writeFileSync(
      path.join(process.cwd(), 'ci-files/lui-slack-notification.json'),
      JSON.stringify([slackNotification], null, '\t')
    );
  });
}

/**
 * Get a list of all files that have been changed in a commit
 * @return {array} - An array of strings representing file changes
 */
async function fetchFileChanges(hash) {
  const filesChanged = await execPromise(
    `git diff-tree --no-commit-id --name-only -r ${hash}`
  );
  return filesChanged.split(/\n/).filter(Boolean);
}

/**
 * Start release process for all workspaces in the project
 */
async function release() {
  try {
    const commits = await fetchCommits();
    commits.reverse().forEach(({ hash, type }) => {});
    const workspaceChanges = new Map(); // Will hold workspace name and what the highest SemVer is
    let projectSemVer = 'patch';
    for (const commit of commits.reverse()) {
      projectSemVer = getHighestConventionalCommit(projectSemVer, commit.type);
      const filesChanged = await fetchFileChanges(commit.hash);
      filesChanged.forEach(file => {
        package.workspaces.forEach(workspace => {
          if (file.startsWith(workspace)) {
            // File that changed is in a workspace
            const previous = workspaceChanges.get(
              workspace.replace('packages/', '')
            );
            const commitList = (previous && previous.commitList) || [];
            if (!commitList.find(list => list.hash === commit.hash))
              commitList.push(commit);
            workspaceChanges.set(
              require('../../' + workspace + '/package.json').name,
              {
                type: getHighestConventionalCommit(
                  previous && previous.type,
                  commit.type
                ),
                commitList // Will be used for change log generation
              }
            );
          }
        });
      });
    }

    // Bump SemVer
    const semVerPromises = [];
    workspaceChanges.forEach((info, workspace) => {
      semVerPromises.push(updateWorkspaceSemVer(workspace, info));
    });

    await Promise.all(semVerPromises);

    // All SemVer should be correct now release packages
    const releasePromises = [];
    workspaceChanges.forEach((info, workspace) => {
      releasePromises.push(releaseWorkspace(workspace, info));
    });

    await Promise.all(releasePromises);
    // Generate release notes
    await execPromise(
      `yarn exec rm -rf CHANGELOG.md && yarn generate-changelog -t HEAD...${lastRelease}`
    );
    // Set version for whole project
    await execPromise(`yarn exec npm version patch --no-git-tag-version`);

    saveSlackNotificationJSON();
  } catch (error) {
    console.error(error);
  }
}

release().then(() => {
  console.log(releaseVersions.join(', ').trim());
});
