function fixPrankNumber(arr) {
    const len = arr.length
    let differenceArray = new Array(len - 1)

    for (let i = 0; i < len; i++) {
        if (i + 1 < len) {
            let diff = arr[i + 1] - arr[i]
            differenceArray[i] = diff
        }
    }

    const step = Array.from(new Set(differenceArray)).reduce((prev, curr) =>
        differenceArray.filter(el => el === curr).length > differenceArray.filter(el => el === prev).length ? curr : prev
    );

    for (let i = 1; i < len; i++) {
        if (arr[i] - arr[i - 1] !== step) {
            if (i + 1 < len && arr[i + 1] - arr[i] === step) {
                arr[i - 1] = arr[i] - step
            } else {
                arr[i] = arr[i - 1] + step
            }
            break;
        }
    }


    return arr;
}

module.exports = fixPrankNumber