require('tap').test('ISC License test', function(test) {
  test.plan(1);
  var packageJSON = {
    author: 'John Doe <john@doe.com>',
    license: 'ISC'
  };
  require('..')(packageJSON, function(error, text) {
    test.equal(
      text,
      [
        'SPDX:ISC',

        'ISC License:',

        'Copyright (c) ' + new Date().getFullYear() + ' by John Doe',

        'Permission to use, copy, modify, and/or distribute this ' +
        'software for any purpose with or without fee is hereby ' +
        'granted, provided that the above copyright notice and this ' +
        'permission notice appear in all copies.',

        'THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL ' +
        'WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL ' +
        'IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO ' +
        'EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, ' +
        'INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES ' +
        'WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, ' +
        'WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER ' +
        'TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE ' +
        'USE OR PERFORMANCE OF THIS SOFTWARE.'
      ].join('\n\n')
    );
  });
});
