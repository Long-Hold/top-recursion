function mergeSort(arr) {
    // console.log('This was printed recursively');
    if (arr.length <= 1) return arr;

    // If the array is not reduced to a single element, keep cutting it in half
    const halvedLength = Math.ceil(arr.length / 2);

    // Split the current array in half
    const leftHalf = arr.slice(0, halvedLength);
    const rightHalf = arr.slice(halvedLength);

    console.log(`Left: ${leftHalf}. Right: ${rightHalf}`);

    const leftSort = mergeSort(leftHalf);
    const rightSort = mergeSort(rightHalf);
    /**
     * Rely on the fact that the first index of either array is the smallest value
     */


}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))