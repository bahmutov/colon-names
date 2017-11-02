const la = require('lazy-ass')
const is = require('check-more-types')

const hasDashes = s => is.found(s.indexOf('-'))

const hasUnderscores = s => is.found(s.indexOf('_'))

const hasCapitalLetters = s => /[A-Z]/.test(s)

function isColonSeparated (s) {
  la(is.unemptyString(s), 'invalid string', s)
  return !hasDashes(s) && !hasUnderscores(s) && !hasCapitalLetters(s)
}

// throws if any of the given strings has other separators
function verifyColonSeparated (strings) {
  la(is.strings(strings), 'invalid strings', strings)
  strings.forEach(s => {
    if (!isColonSeparated(s)) {
      throw new Error(s + ' is using a separator other than ":"')
    }
  })
}

module.exports = { isColonSeparated, verifyColonSeparated }
