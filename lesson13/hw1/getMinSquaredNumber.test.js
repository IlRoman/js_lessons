import { fun } from './getMinSquaredNumber.js';

it('should get', function () {
    const result = fun([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
});