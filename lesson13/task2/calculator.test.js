import { getSquaredArray, getOddNumbers, sum } from './calculator.js';

it('should get squared numbers', function () {
    const result = getSquaredArray([2, 4, 5]);
    expect(result).toEqual([4, 16, 25]);
});