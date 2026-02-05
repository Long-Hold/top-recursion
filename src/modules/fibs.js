export function fibs(num) {
    const sequence = [0, 1];
    if (num === 1) return [0];
    if (num === 2) return sequence;

    for (let i = 1; i < num - 1; ++i) {
        sequence.push(sequence[i] + sequence[i - 1]);
    }

    return sequence;
}

export function fibsRec(num) {
    if (num === 1) return [0];

    /**This array is the 'seed' of the fibonacci sequence.
     * I can build all sequences from this Array using tail recursion
     */
    const sequenceSeed = [0,1];

    /**
     * Calculates the fibonacci sequence num times using tail recursion.
     * In each recursive call, the next number in sequence is calculated from Array[-1] + Array[-2]
     * and then passed to the next call.
     * 
     * num represents how many numbers in sequence are left to calculate. When num = 0, then the requested
     * sequence has been completely calculated and the sequenceArray that was passed in is immediately returned.
     * 
     * @param {int} num - The remaining numbers left to calculate for the Fibonacci sequence.
     * @param {int[]} sequenceArray - An array of the currently calculated sequence.
     * @returns {int[]} An array representing the Fibonacci sequence up to num sequences.
     */
    function fibonacci(num, sequenceArray) {
        // There are no more numbers to calculated, so we can return the computed sequence.
        if (num === 0) return sequenceArray;

        //Calculate the next value in the sequence
        sequenceArray.push(sequenceArray.at(-1) + sequenceArray.at(-2));
        return fibonacci(num - 1, sequenceArray);
    }

    // Because the sequenceSeed has the first 2 values already, we subtract 2 from nums.
    return fibonacci(num - 2, sequenceSeed);
}