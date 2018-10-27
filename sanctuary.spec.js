const add5Func = require('./sanctuary').add5;

describe('add5', () => {
    it('should add 5 to a number', () => {
        expect(add5Func(4)).toBe(9);
    });
});