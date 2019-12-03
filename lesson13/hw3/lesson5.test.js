import { getSum } from '../../lesson5/hw1/index';
import { getPrimes } from '../../lesson5/hw2/index';
import { compareSums } from '../../lesson5/hw4/index';
import { findDivCount } from '../../lesson5/hw5/index';

getSum
it('should get 6', function () {
    const result = getSum(1, 5);
    expect(result).toEqual(6);
});

it('should get 6', () => {
    let result = getSum(1, [5]);
    expect(result).toEqual(6);
});

it('should get 20', function () {
    const result = getSum(1, 9);
    expect(result).toEqual(20);
});

getPrimes
it('should get [2, 3, 5]', function () {
    const result = getPrimes(5);
    expect(result).toEqual([2, 3, 5]);
});

it('should get [2, 3, 5, 7]', function () {
    const result = getPrimes(10);
    expect(result).toEqual([2, 3, 5, 7]);
});

it('should get [2, 3, 5, 7, 11, 13]', function () {
    const result = getPrimes(15);
    expect(result).toEqual([2, 3, 5, 7, 11, 13]);
});

compareSums
it('should get true', function () {
    const result = compareSums(3, 4, 1, 2);
    expect(result).toEqual(true);
});

it('should get false', function () {
    const result = compareSums(1, 2, 3, 4);
    expect(result).toEqual(false);
});

it('should get false', function () {
    const result = compareSums(2, 5, 15, 20);
    expect(result).toEqual(false);
});

findDivCount
it('should get 5', function () {
    const result = findDivCount(2, 10, 2);
    expect(result).toEqual(5);
});

it('should get 3', function () {
    const result = findDivCount(3, 10, 3);
    expect(result).toEqual(3);
});

it('should get 1', function () {
    const result = findDivCount(9, 10, 2);
    expect(result).toEqual(1);
});