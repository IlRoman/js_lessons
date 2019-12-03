import { squareArray } from '../../lesson7/hw1/index';
import { reverseArray } from '../../lesson7/hw2/index';

// squareArray
it('should get null', function () {
    const result = squareArray(125);
    expect(result).toEqual(null);
});

it('should get [4, 6]', function () {
    const result = squareArray([2, 3]);
    expect(result).toEqual([4, 9]);
});

it('should get [25, 1]', function () {
    const result = squareArray([5, 1]);
    expect(result).toEqual([25, 1]);
});

// reverseArray
it('should get null', function () {
    const result = reverseArray(125);
    expect(result).toEqual(null);
});

it('should get [1, 2, 3]', function () {
    const result = reverseArray([3, 2, 1]);
    expect(result).toEqual([1, 2, 3]);
});

it('should get [\'a\', \'b\', \'c\']', function () {
    const result = reverseArray(['c', 'b', 'a']);
    expect(result).toEqual(['a', 'b', 'c']);
});