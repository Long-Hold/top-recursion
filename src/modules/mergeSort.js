export function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    // If the array is not reduced to a single element, keep cutting it in half
    const halvedLength = Math.floor(arr.length / 2);

    /**
     * This leverages the fact that each RECURSIVE call of merge sort returns a divided
     * portion of the original array, so we take the left and right halves of that
     * already divided array.
     */
    const leftHalf = mergeSort(arr.slice(0, halvedLength));
    const rightHalf = mergeSort(arr.slice(halvedLength));

    let leftIndex = 0;
    let rightIndex = 0;
    const merged = [];

    /**
     * The while loop will continue to run until of the arrays have been
     * completely iterated through.
     * 
     * Because each sub-array is already sorted, we can gaurantee that when one array is
     * passed through entirely before the other, the remaining values will be higher
     * than any value in the fully iterated array.
     * 
     * This means we can push all remaining values from that array, in their current order,
     * onto the end of sorted array.
     */
    while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
        if (leftHalf[leftIndex] <= rightHalf[rightIndex]) {
            merged.push(leftHalf[leftIndex]);
            ++leftIndex;
        } else {
            merged.push(rightHalf[rightIndex]);
            ++rightIndex;
        }
    }

    merged.push(...leftHalf.slice(leftIndex), ...rightHalf.slice(rightIndex));

    return merged;
}