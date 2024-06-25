import * as fs from 'fs';

fs.readFileSync('./data.csv','utf8');


console.log('Hello, ' + fs.readFileSync('./data.csv','utf8'));
