export const calculate = (numbers: number[], operation: string): number[] => {
    if (operation !== '+' && operation !== '*') {
        throw new Error('Operation invalide, ça prend en compte que + et * .');
    }

    const results: number[] = [];
    let accumulator = operation === '+' ? 0 : 1;

    for (const num of numbers) {
        if (operation === '+') {
            accumulator += num;
        } else if (operation === '*') {
            accumulator *= num;
        }
        results.push(accumulator);
    }

    return results;
};
