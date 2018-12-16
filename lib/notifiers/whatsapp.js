const notifier = require('node-notifier')
const exec = require('child_process').execSync

module.exports = function (task, config) {
  if (
    config &&
    config.enabled
  ) {
    exec(`yowsup-cli demos -c config -s 917726864945 '${task}'`)
  }
}
