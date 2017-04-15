'use strict';

const fs = require('fs')

module.exports = function (input,output) {
  input = fs.readFileSync(input) 
  input = JSON.parse(input)

  var data=""
  for( var selecter in input) {
    data+="\n"+selecter
    data+=" {"
    for ( var property in input[selecter]) {
      data+="\n"+property+":"+input[selecter][property]+";"
    }
    data+="\n"+"}"
  }
  fs.writeFileSync(output,data)
}
