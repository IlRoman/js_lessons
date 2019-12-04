import { createCalculator } from './index';

it('get 3', () => {
    let counter = createCalculator();
    let result = counter.add(3)
    expect(result).toEqual(3);
})

it('get -5', () => {
    let counter = createCalculator();
    let result = counter.decrease(5);
    expect(result).toEqual(-5);
})

it('get 0', () => {
    let counter = createCalculator();
    counter.add(5);
    let result = counter.reset();
    expect(result).toEqual(0);
})