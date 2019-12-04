import { createLogger } from './index';

it('get warn', () => {
    // let counter1 = createLogger();

    // counter1.warn('фбв');
    // counter1.error('где');
    // counter1.log('жзи');
    // counter1.getRecords('');
    // let result = counter1.getRecords.map(x => x = x.message);
    // expect(result).toEqual(['жзи', 'где', 'фбв']);

    let counter = createLogger();
    const result = counter.getRecords();
    expect(result).toEqual([]);
});