"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayResults = void 0;
const displayResults = (numbers, operation, results) => {
    let output = '';
    for (let i = 0; i < numbers.length; i++) {
        output += i === 0 ? `        ${numbers[i]}\n` : `        ${operation}${numbers[i]} (=${results[i]})\n`;
    }
    output += '        -------\n';
    output += `résutaats = ${results[results.length - 1]} (${operation === '+' ? 'addition' : 'multiplication'})`;
    console.log(output);
};
exports.displayResults = displayResults;
