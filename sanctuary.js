const S = require('sanctuary');

module.exports.add5 = S.add(5)

module.exports.add1ThenSqrt = S.compose(Math.sqrt)(S.add(1))