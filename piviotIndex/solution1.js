const calcSum = (arr, start, end) =>
    arr.slice(start, end).reduce((agg, n) => agg + n, 0);

const getArrayPivotIndex = arr => {
    const length = arr && arr.length || 0;
    if (length === 1 || !length) {
        return length ? 0 : -1;
    }

    for (let i = 0; i < length; i++) {
        const left = calcSum(arr,0, i);
        const right = calcSum(arr,i + 1);
        if (left === right) {
            return i;
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
