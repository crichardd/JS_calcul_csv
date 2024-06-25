export const displayResults = (numbers: number[], operation: string, results: number[]): void => {
    let output = '';

    for (let i = 0; i < numbers.length; i++) {
        output += i === 0 ? `        ${numbers[i]}\n` : `        ${operation}${numbers[i]} (=${results[i]})\n`;
    }

    output += '        -------\n';
    output += `résutaats = ${results[results.length - 1]} (${operation === '+' ? 'addition' : 'multiplication'})`;

    console.log(output);
};
