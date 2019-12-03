import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should get null', function () {
    const result = getMinSquaredNumber([]);
    expect(result).toEqual(null);
});

it('should get null again', function () {
    const result = getMinSquaredNumber('абв');
    expect(result).toEqual(null);
});

it('should get 4', function () {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
});