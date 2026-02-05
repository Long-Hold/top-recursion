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
    
}