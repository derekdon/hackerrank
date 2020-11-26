/**
 * Solution 1 passes all the HackerRank test benchmarks, but fails a hidden speed test.
 * This is likely caused by using the Array.reduce.
 *
 * This version passes all and the speed test, but is move verbose.
 */
const getArrayPivotIndex = arr => {
    const length = arr && arr.length || 0;
    if (length === 1 || !length) {
        return length ? 0 : -1;
    }

    for (let pivot = 0; pivot < length; pivot++) {
        let leftSum = 0;
        let leftIndex = 0;
        let rightSum = 0;
        let rightIndex = pivot + 1;

        for (leftIndex; leftIndex < pivot; leftIndex++) {
            leftSum += arr[leftIndex];
        }

        for (rightIndex; rightIndex < length; rightIndex++) {
            rightSum += arr[rightIndex];
        }

        if (leftSum === rightSum) {
            return pivot
        }
    }

    return -1;
};

/**
 * Outputs:
 * 3
 * 0
 * 3
 * -1
 * -1
 */
console.log(getArrayPivotIndex([1,2,3,4,6])); // tslint:disable-line
console.log(getArrayPivotIndex([15])); // tslint:disable-line
console.log(getArrayPivotIndex([-1, -1, -1, 0, -3, 0])); // tslint:disable-line
console.log(getArrayPivotIndex([])); // tslint:disable-line
console.log(getArrayPivotIndex()); // tslint:disable-line
