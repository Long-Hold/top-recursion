import { fibs } from "../modules/fibs";

test('Returns an array with the first number in sequence', () => {
    expect(fibs(1)).toBe([1]);
})