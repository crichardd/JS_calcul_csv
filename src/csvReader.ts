import fs from 'fs';
import { parse } from 'csv-parse';

export const readCSV = (filePath: string): Promise<number[]> => {
    return new Promise((resolve, reject) => {
        const numbers: number[] = [];
        fs.createReadStream(filePath)
            .pipe(parse({ delimiter: ',' }))
            .on('data', (row) => {
                numbers.push(parseFloat(row[0]));
            })
            .on('end', () => {
                resolve(numbers);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};
