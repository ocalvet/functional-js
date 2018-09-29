const _ = require('lodash');

const testData = [1, 2, 3, 10, 5, 6, 22, 10, 12];

isNotA10 = number => number !== 10;

testData.forEach(number => {
  console.log(isNotA10(number) ? 'Not a ten' : 'Ten');
});

const get = _.curry((property, obj) => obj[property]);

const data = {
  test: '1234'
}

console.log(get('test')(data));

// implement map with reduce
const nmap = (list, f) => {
  return list.reduce((p, e, i) => {
    return p.concat([f(e)]);
  }, [])
}

const plusOne = (e) => e + 1;

console.log('map', nmap([2,3,4,9], plusOne));
