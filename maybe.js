const Maybe = require('folktale/maybe');

function find(xs, predicate) {
  for (const x of xs) {
    if (predicate(x)) return Maybe.Just(x);
  }

  return Maybe.Nothing();
}

module.exports = {
  find
};
