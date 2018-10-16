const _ = require('ramda');
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

const fnMap = (f, mappingFn) => (x => f(mappingFn(x)));

function Maybe(val) {
  this.value = val;
}

Maybe.prototype.map = () => {
  return this.value ? new Maybe(this.value) : new Maybe(null);
}

const times2 = v => v * 2;
const times3 = v => v * 3;

const times6 = fnMap(times2, times3);

console.log(times6(8));
