const fs = require('fs')

module.exports = function (input, output) {
  input = JSON.parse(fs.readFileSync(input))

  var data = Object.entries(input).reduce((acc1, cur1) => {
    return `${acc1}\n\n${cur1[0]} ` + Object.keys(cur1[1]).reduce((acc2, cur2) => `${acc2}\n\t${cur2}: ${cur1[1][cur2]};`, '{') + '\n}'
  }, '')

  fs.writeFileSync(output, data)
}
