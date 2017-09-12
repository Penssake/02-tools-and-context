'use strict';

const fp = require('../lib/fp.js');

test('map(\'suoicod\') should return "SUOIOD"', () => {
  let result = fp.map();
  expect(result).toEqual('S','U','O','I','O','D');
});
