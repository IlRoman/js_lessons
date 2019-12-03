import { calc } from './index';

it('should get 4', function () {
    const result = calc('2 + 2');
    expect(result).toEqual('2 + 2 = 4');
});

it('should get 0', function () {
    const result = calc('2 - 2');
    expect(result).toEqual('2 - 2 = 0');
});

it('should get 6', function () {
    const result = calc('2 * 3');
    expect(result).toEqual('2 * 3 = 6');
});

it('should get 1', function () {
    const result = calc('2 / 2');
    expect(result).toEqual('2 / 2 = 1');
});

it('should get null', function () {
    const result = calc(5);
    expect(result).toEqual(null);
});