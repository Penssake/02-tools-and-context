'use strict';

const fp = module.exports = {};

fp.map = (callback, context) => {
  return Array.prototype.map.call(context, callback);
};
fp.map((song) => song.toUpperCase(), 'suoicod');

fp.filter = () => {

};
