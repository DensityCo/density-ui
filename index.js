var bourbonPaths = require('bourbon').includePaths
var resetPath = require('node-reset-scss').includePath

// copy bourbonPaths and then push the resetPath onto the end
var includePaths = bourbonPaths.slice()
includePaths.push(resetPath)

exports.includePaths = includePaths
