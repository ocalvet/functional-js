const Maybe = require('folktale/maybe');

    function find(xs, predicate) {
      for (const x of xs) {
        if (predicate(x))  return Maybe.Just(x);
      }

      return Maybe.Nothing();
    }

    const f1 = find([null, 1], x => true);  // ==> Maybe.Just(null)
    const f2 = find([null, 1], x => false); // ==> Maybe.Nothing()

    console.log('f1', f1.toString());
    
    console.log('f2', f2);
