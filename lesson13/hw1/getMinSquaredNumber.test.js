import { fun } from './getMinSquaredNumber.js';

it('should get', function () {
    const result = fun([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
});

it('should get1', function () {
    const result = fun([]);
    expect(result).toEqual(null);
});

it('should get2', function () {
    const result = fun('абв');
    expect(result).toEqual(null);
});