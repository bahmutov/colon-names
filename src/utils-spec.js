'use strict'

const snapshot = require('snap-shot-it')
const la = require('lazy-ass')
const is = require('check-more-types')

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

describe('verifyColonSeparated', () => {
  const { verifyColonSeparated } = require('./utils')

  it('checks empty list', () => {
    verifyColonSeparated([])
  })

  it('checks single string', () => {
    verifyColonSeparated(['foo'])
  })

  it('checks two strings', () => {
    verifyColonSeparated(['foo', 'test:foo'])
  })

  it('throws on dashes', () => {
    la(
      is.raises(
        () => {
          verifyColonSeparated(['foo', 'test-foo'])
        },
        e => {
          snapshot(e.message)
          return true
        }
      )
    )
  })
})
