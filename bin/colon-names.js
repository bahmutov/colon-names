#!/usr/bin/env node

const colonNames = require('..')
try {
  colonNames()
} catch (e) {
  console.error(e.message)
  process.exit(1)
}
