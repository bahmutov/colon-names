const la = require('lazy-ass')
const is = require('check-more-types')

const hasDashes = s => is.found(s.indexOf('-'))

const hasUnderscores = s => is.found(s.indexOf('_'))

const hasCapitalLetters = s => /[A-Z]/.test(s)

function isColonSeparated (s) {
  la(is.unemptyString(s), 'invalid string', s)
  return !hasDashes(s) && !hasUnderscores(s) && !hasCapitalLetters(s)
}

module.exports = { isColonSeparated }
