function isFizzBuzz(arr) {
    let result = true;
    const len = arr.length;
    const sanitizedArr = new Array(len);

    let anchorIndex = -1;
    let anchorValue = null;

    for (let i = 0; i < len; i++) {
        if (typeof arr[i] === "number") {
            anchorIndex = i;
            anchorValue = arr[i];
            break;
        }
    }

    if (anchorValue === null) return null;

    for (let i = 0; i < len; i++) {
        sanitizedArr[i] = anchorValue + (i - anchorIndex)
    }

    for (let i = 0; i < len; i++) {
        let val = sanitizedArr[i]
        let arrValue = arr[i]
        let target = null;

        if (val % 3 === 0 && val % 5 == 0) {
            target = "FizzBuzz"
        } else if (val % 5 === 0) {
            target = "Buzz"
        } else if (val % 3 === 0) {
            target = "Fizz"
        } else {
            target = val
        }
        
        result = arrValue === target

        if (!result) break;
    }

    return result;
}


module.exports = isFizzBuzz