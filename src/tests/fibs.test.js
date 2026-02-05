import { fibs, fibsRec } from "../modules/fibs";

describe('fibs()', () => {
    test.skip.each([
        {
            desc: 'the first value in sequence',
            input: 1,
            result: [0],
        },
        {
            desc: 'the first 2 values in sequence',
            input: 2,
            result: [0, 1],
        },
        {
            desc: 'the first 3 values in sequence',
            input: 3,
            result: [0, 1, 1],
        },
        { 
            desc: 'the first 8 values in sequence',
            input: 8,
            result: [0, 1, 1, 2, 3, 5, 8, 13],
        }
    ])('returns an array with $desc', ({input, result}) => {
        expect(fibs(input)).toStrictEqual(result);
    })
});

describe('fibsRec()', () => {
    test.each([
        {
            desc: 'the first number in sequence',
            input: 1,
            result: [0],
        },
    ])('returns the $desc', ({input, result}) => {
        expect(fibsRec(input)).toStrictEqual(result);
    })
});