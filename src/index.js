"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const csvReader_1 = require("./csvReader");
const calculator_1 = require("./calculator");
const display_1 = require("./display");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const args = process.argv.slice(2);
    if (args.length !== 2) {
        console.error('calc <file.csv> <operation>');
        process.exit(1);
    }
    const [fileName, operation] = args;
    try {
        const numbers = yield (0, csvReader_1.readCSV)(fileName);
        const results = (0, calculator_1.calculate)(numbers, operation);
        (0, display_1.displayResults)(numbers, operation, results);
    }
    catch (error) {
        console.error('Error:');
    }
});
main();
