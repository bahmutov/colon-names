'use strict'

const { join } = require('path')
const { verifyColonSeparated } = require('./utils')

function colonNames (filepath) {
  if (!filepath) {
    filepath = join(process.cwd(), 'package.json')
  }
  const pkg = require(filepath)
  if (!pkg.scripts) {
    // package.json has no scripts
    return
  }
  const names = Object.keys(pkg.scripts)
  verifyColonSeparated(names)
}

module.exports = colonNames
