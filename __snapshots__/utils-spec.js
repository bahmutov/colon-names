exports['isColonSeparated checks for dashes and underscores isColonSeparated 1'] = {
  "name": "isColonSeparated",
  "behavior": [
    {
      "given": "foo",
      "expect": true
    },
    {
      "given": "foo:bar",
      "expect": true
    },
    {
      "given": "foo-bar",
      "expect": false
    },
    {
      "given": "fooBar",
      "expect": false
    },
    {
      "given": "foo_bar",
      "expect": false
    },
    {
      "given": "_foo",
      "expect": false
    },
    {
      "given": "FOO",
      "expect": false
    }
  ]
}

exports['verifyColonSeparated throws on dashes 1'] = `
test-foo is using a separator other than ":"
`
