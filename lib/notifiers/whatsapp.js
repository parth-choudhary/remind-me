const notifier = require('node-notifier')
const exec = require('child_process').execSync

module.exports = function (task, config) {
  if (
    config &&
    config.enabled
  ) {
    exec(`/usr/local/bin/yowsup-cli demos -c /Users/parth/Projects/whatsapp-framework/config -s 917726864945 '${task}'`)
  }
}
