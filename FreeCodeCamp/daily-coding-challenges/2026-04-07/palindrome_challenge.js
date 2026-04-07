function palindromeLocator(str) {
    const newStr = [...str].reverse().join('')

    if (str !== newStr) return 'none'

    let index = Math.floor(str.length / 2)
    if (str.length % 2 !== 0){
        return str[index]
    }

    return str[index -1] + str[index]
}

console.log(palindromeLocator('racecar'))
console.log(palindromeLocator('level'))
console.log(palindromeLocator('freecodecamp'))
console.log(palindromeLocator('noon'))
console.log(palindromeLocator('11100111'))