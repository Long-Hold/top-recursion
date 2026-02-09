export function mergeSort(arr) {
    // console.log('This was printed recursively');
    if (arr.length <= 1) return arr;

    // If the array is not reduced to a single element, keep cutting it in half
    const halvedLength = Math.floor(arr.length / 2);

    // Split the current array in half
    /**
     * This leverages the fact that each RECURSIVE call of merge sort returns a divided
     * portion of the original array, so we take the left and right halves of that
     * already divided array.
     */
    const leftHalf = arr.slice(0, halvedLength);
    const rightHalf = arr.slice(halvedLength);

    /**
     * This portion then takes those divided halves, from the original divided array,
     * to further reduce them.
     */
    const leftSort = mergeSort(leftHalf);
    const rightSort = mergeSort(rightHalf);
    /**
     * At this point, a comparison and merge of the leftSort and rightSort must occur.
     * Rely on the fact that the first index of either array is the smallest value
     */

    let leftIndex = 0;
    let rightIndex = 0;
    const merged = [];
    while (leftIndex < leftSort.length && rightIndex < rightSort.length) {
        if (leftSort[leftIndex] <= rightSort[rightIndex]) {
            merged.push(leftSort[leftIndex]);
            ++leftIndex;
        } else {
            merged.push(rightSort[rightIndex]);
            ++rightIndex;
        }
    }

    if (leftIndex === leftSort.length) merged.push(...rightSort.slice(rightIndex));
    else if (rightIndex === rightSort.length) merged.push(...leftSort.slice(leftIndex));

    return merged;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))