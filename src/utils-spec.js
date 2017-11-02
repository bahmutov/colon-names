'use strict'

const snapshot = require('snap-shot-it')
/* eslint-env mocha */
describe('isColonSeparated', () => {
  const { isColonSeparated } = require('./utils')

  it('checks for dashes and underscores', () => {
    snapshot(
      isColonSeparated,
      // true
      'foo',
      'foo:bar',
      // false
      'foo-bar',
      'fooBar',
      'foo_bar',
      '_foo',
      'FOO'
    )
  })
})
