require('tap').test('MIT License test', function(test) {
  test.plan(2);
  var packageJSON = {
    author: 'John Doe <john@doe.com>',
    license: 'GPL-3.0'
  };
  require('..')(packageJSON, false, function(error, text) {
    var split = text.split('\n\n');
    test.equal(true, split[0].indexOf('SPDX:GPL-3.0') > -1);
    test.equal(true, split[1].indexOf('GNU GENERAL PUBLIC') > -1);
  });
});