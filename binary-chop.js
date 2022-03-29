let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const binarySearch = (sortedArray, target) => {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === target) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < target) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

console.log(binarySearch(arr, 3))
