function capitalizeFibonacci(str) {
    let strArray = new Array(str.length)
    strArray = str.split('')

    for (let i = 0; i < str.length; i++) {
        let isAlphabetic = /^[A-Za-z]+$/.test(strArray[i])
        if (!isAlphabetic) continue


        if (isFibonacci(i)) {
            strArray[i] = strArray[i].toUpperCase()
        } else {
            strArray[i] = strArray[i].toLowerCase()
        }
    }

    str = strArray.join('')

    return str;

    function isFibonacci(x) {
        if (x === 0 || x === 1) return true;

        let a = 0, b = 1, c;

        while (true) {
            c = a + b
            a = b
            b = c
            if (c === x) {
                return true
            } else if (c >= x) {
                return false
            }
        }
    }
}

module.exports = capitalizeFibonacci