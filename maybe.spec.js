const Maybe = require('folktale/maybe');
const find = require('./maybe').find;

describe('find', () => {
  it('should find the value and return a Maybe', () => {
    const f1 = find([null, 1], x => true);  // ==> Maybe.Just(null)
    expect(f1).toEqual(Maybe.Just(null))
  });

  it('should return the main Maybe', () => {
    const f2 = find([null, 1], x => false); // ==> Maybe.Nothing()
    expect(f2).toEqual(Maybe.Nothing());
  })
});