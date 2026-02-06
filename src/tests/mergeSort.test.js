import { mergeSort } from "../modules/mergeSort";

describe('mergeSort()', () => {
    describe('valid input:', () => {
        test.each([
            {input: [], result: []},
            {input: [1], result: [1]},
            {input: [1,2,3,4,5], result: [1,2,3,4,5]},
            {input: [3, 2, 1, 13, 8, 5, 0, 1], result: [0, 1, 1, 2, 3, 5, 8, 13]}
        ])('when passed $input, returns $result', ({input, result}) => {
            expect(mergeSort(input)).toStrictEqual(result);
        })
    })
})