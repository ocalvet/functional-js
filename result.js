const Result = require('folktale/result');

class DivisionByZero extends Error {
  get name() { return "DivisionByZero" }
}

class IllegalArgument extends Error {
  get name() { return "IllegalArgument" }
}

function divide(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return Result.Error(new IllegalArgument(`arguments to divide must be numbers`));
  } else if (y === 0) {
    return Result.Error(new DivisionByZero(`${x} / ${y} is not computable.`));
  } else {
    return Result.Ok(x / y);
  }
}

const r0 = divide(4, 2); // ==> Result.Ok(2)
const r1 = divide(2, 0); // ==> Result.Error([DivisionByZero: 2 / 0 is not computable])

console.log('r0', r0);
console.log('r1', r1);
