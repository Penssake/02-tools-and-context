'use strict';

const fp = module.exports = {};

fp.map = (callback, context) => {
    return Array.prototype.map.call(context, callback);
};

fp.filter = (callback, context) => {
  return Array.prototype.filter.call(context, callback);
};

fp.reduce = (context, ...args) => {
  return Array.prototype.reduce.apply(context, args);
};
