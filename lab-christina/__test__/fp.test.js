'use strict';

const fp = require('../lib/fp.js');

describe('#map', () => {
  test('fp.map() should return an Array', () => {
    expect(fp.map((n) => n, 'CHRISTINA')).toEqual(['C','H','R','I','S','T','I','N','A' ]);
  });
});

describe('#reduce', () => {
  test('fp.reduce() should output a return value determined by the accumulator and current value', () => {
    expect(fp.reduce(' goose', (p, n) => p + n, ['super'])).toEqual('super goose');
    expect(fp.reduce([3,4,5], (p, n) => p + n)).toBe(12);
    expect(fp.reduce(['bathtub ','w','i','n','e ','is ', 'fine in line'], (p, n) => p + n)).toEqual('bathtub wine is fine in line');
  });
});

discribe('#filter', () => {
  test('fp.filter() should filter contents by arguments provided and return truthy values?? Vague.', () => {
    // expect(fp.filter('JavaScript'))
  });
});
