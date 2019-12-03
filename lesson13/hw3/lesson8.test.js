import { pickProps } from '../../lesson8/hw1/index';
import { getAdults } from '../../lesson8/hw2/index'

// pickProps
it('should get {}', () => {
    let result = pickProps({ a: 1, b: 2 }, []);
    expect(result).toEqual({});
});

it('should find items in object', () => {
    let result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'b']);
    expect(result).toEqual({ a: 1, b: 2 });
});

it('should get {}', () => {
    let result = pickProps({ a: 1, b: 2, c: 3 }, '');
    expect(result).toEqual({});
});


// getAdults
it('Sorted object by age', () => {
    let result = getAdults({ 'Roma': 27, 'Vasya': 15, 'Kolya': 18 });
    expect(result).toEqual({ 'Roma': 27, 'Kolya': 18 });
});

it('empty object', () => {
    let result = getAdults({ 'Roma': 8, 'Vasya': 5, 'Kolya': 17 });
    expect(result).toEqual({});
});

it('Should get {}', () => {
    let result = getAdults('');
    expect(result).toEqual({});
});
