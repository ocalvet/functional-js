var m = require('./main');

describe('elementPlusOne', () => {
  it('should return an array with same elements incremented by 1', () => {
    expect(m.elementsPlusOne([2,3,4,9])).toEqual([3,4,5,10]);
  })
});

describe('get', () => {
  it('should return the value of test property', () => {
    const data = {
      test: '1234'
    }
    expect(m.get('test')(data)).toEqual('1234');
  });
});