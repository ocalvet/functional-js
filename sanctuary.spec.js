const sut = require('./sanctuary');

describe('add5', () => {
    it('should add 5 to a number', () => {
        expect(sut.add5(4)).toBe(9);
    });
});

describe(' ', () => {
    it('Should calculate the square root after adding 1', () => {
        expect(sut.add1ThenSqrt(99)).toBe(10);
    })
})
