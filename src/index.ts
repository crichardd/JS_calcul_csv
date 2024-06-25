import { readCSV } from './csvReader';
import { calculate } from './calculator';
import { displayResults } from './display';

const main = async () => {
    const args = process.argv.slice(2);
    if (args.length !== 2) {
        console.error('calc <file.csv> <operation>');
        process.exit(1);
    }

    const [fileName, operation] = args;

    try {
        const numbers = await readCSV(fileName);
        const results = calculate(numbers, operation);
        displayResults(numbers, operation, results);
    } catch (error) {
        console.error('Error:');
    }
};

main();
