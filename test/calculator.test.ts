import { calculate } from '../src/calculator';

describe('Calculator', () => {
    test('bonne addition', () => {
        const numbers = [1, 2, 3];
        const operation = '+';
        const results = calculate(numbers, operation);
        expect(results).toEqual([1, 3, 6]);
    });

    test('bonne multiplication', () => {
        const numbers = [1, 2, 3];
        const operation = '*';
        const results = calculate(numbers, operation);
        expect(results).toEqual([1, 2, 6]);
    });

    test('operation invalide', () => {
        const numbers = [1, 2, 3];
        const operation = '-';
        expect(() => calculate(numbers, operation)).toThrow('Operation invalide, ça prend en compte que + et * .');
    });
});
