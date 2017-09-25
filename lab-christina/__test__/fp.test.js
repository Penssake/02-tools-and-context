'use strict';

const fp = require('../lib/fp.js');

describe('#map', () => {
  test('fp.map() should return an Array', () => {
    expect(fp.map((n) => n, 'CHRISTINA')).toEqual(['C','H','R','I','S','T','I','N','A' ]);
    expect(fp.map((n) => n * 3, [3,4,5,6])).toEqual([9, 12, 15, 18]);
    expect(fp.map((n) => n.toLowerCase(), 'PINEAPPLE')).toEqual(['p','i','n','e','a','p','p','l','e']);

  });
});

describe('#filter', () => {
  test('fp.filter() should filter contents by arguments provided and return.', () => {
    expect(fp.filter((n) => n < 13, [1,45,67,0])).toEqual([1,0]);
    expect(fp.filter((n) => n > 'B', ['n','B','A','m'])).toEqual(['n','m']);
  });
});

describe('#reduce', () => {
  test('fp.reduce() should output a return value determined by the accumulator and current value', () => {
    expect(fp.reduce(' goose', (p, n) => p + n, ['super'])).toEqual('super goose');
    expect(fp.reduce([3,4,5], (p, n) => p + n)).toBe(12);
    expect(fp.reduce(['bathtub ','w','i','n','e ','is ', 'fine in time'], (p, n) => p + n)).toEqual('bathtub wine is fine in time');
  });
});
