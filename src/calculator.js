"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
const calculate = (numbers, operation) => {
    if (operation !== '+' && operation !== '*') {
        throw new Error('Operation invalide, ça prend en compte que + et * .');
    }
    const results = [];
    let accumulator = operation === '+' ? 0 : 1;
    for (const num of numbers) {
        if (operation === '+') {
            accumulator += num;
        }
        else if (operation === '*') {
            accumulator *= num;
        }
        results.push(accumulator);
    }
    return results;
};
exports.calculate = calculate;
