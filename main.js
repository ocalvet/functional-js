const _ = require('ramda');

const testData = [1, 2, 3, 10, 5, 6, 22, 10, 12];

const log = s => console.log(s);
const to10String = b => b ? 'Not a ten' : 'Ten';
const isNotA10 = number => number !== 10;
const app = _.compose(log, to10String, isNotA10);
// _.map(app, testData)

const get = _.curry((property, obj) => obj[property]);

// implement map with reduce
const newmap = _.curry((f, list) => {
  const concat = (p, e) => {
    return p.concat(f(e));
  };
  return list.reduce(concat, [])
});
const plusOne = (e) => e + 1;
const elementsPlusOne = newmap(plusOne);

module.exports = {
  get,
  elementsPlusOne
};