"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCSV = void 0;
const fs_1 = __importDefault(require("fs"));
const csv_parse_1 = require("csv-parse");
const readCSV = (filePath) => {
    return new Promise((resolve, reject) => {
        const numbers = [];
        fs_1.default.createReadStream(filePath)
            .pipe((0, csv_parse_1.parse)({ delimiter: ',' }))
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
exports.readCSV = readCSV;
