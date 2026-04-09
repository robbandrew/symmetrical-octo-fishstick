function getNextBingoNumber(str) {
    const bingoNumbers = [
        { letter: 'B', lower: 1, upper: 15, nextEl: 'I' },
        { letter: 'I', lower: 16, upper: 30, nextEl: 'N' },
        { letter: 'N', lower: 31, upper: 45, nextEl: 'G' },
        { letter: 'G', lower: 46, upper: 60, nextEl: 'O' },
        { letter: 'O', lower: 61, upper: 75, nextEl: 'B' },
    ]

    let letter = str.substring(0, 1)
    let number = parseInt(str.substring(1))

    let bingoNumber = bingoNumbers.find((el) => el.letter === letter)
    if (!bingoNumber) return "Invalid Bingo Number"
    
    if (number < bingoNumber.upper) {
        number += 1
        return `${letter}${number}`
    }

    if (number === bingoNumber.upper) {
        let nextNum = bingoNumbers.find((el) => el.letter === bingoNumber.nextEl)
        return `${nextNum.letter}${nextNum.lower}`
    }

    return "Invalid Bingo Number"
}

module.exports = getNextBingoNumber