const { exec } = require('node:child_process')
const fs = require('fs')
const path = require('path')

exec('git rev-parse HEAD', (err, hash) => {
  const releaseFile = require(path.resolve(__dirname, '.release.json'))
  releaseFile.lastRelease = hash.replace(/\r?\n|\r/, '') // Remove line breaks
  // Update the release commit reference
  fs.writeFile(
    path.resolve(__dirname, '.release.json'),
    JSON.stringify(releaseFile),
    function writeJSON(err) {
      if (err) {
        console.log(err.message)
        return;
      }
      console.log('Release log updated')
      exec(
        `git add ./ci/.release.json && git commit -m 'ci: update release log'`,
        (err, output) => {
          if (err) throw err;
          console.log('git changes complete')
        },
      )
    },
  )
})