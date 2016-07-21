var path = require('path')

var bourbonPaths = require('bourbon').includePaths
var resetPath = require('node-reset-scss').includePath

// copy bourbonPaths and then push the resetPath onto the end
var includePaths = bourbonPaths.slice()
includePaths.push(resetPath)

// also include the density-ui lib itself
includePaths.push(path.join(__dirname, 'lib'))

exports.includePaths = includePaths
