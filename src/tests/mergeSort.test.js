import { mergeSort } from "../modules/mergeSort";

describe('mergeSort()', () => {
    describe('valid input:', () => {
        test.each([
            {input: [], result: []},
            {input: [1], result: [1]},
        ])('when passed $input, returns $result', ({input, result}) => {
            expect(mergeSort(input)).toStrictEqual(result);
        })
    })
})