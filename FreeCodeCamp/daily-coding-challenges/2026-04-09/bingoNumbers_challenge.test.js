const getNextBingoNumber = require('./bingoNumbers_challenge')

test('1. returns B11',  () => {
    expect(getNextBingoNumber('B10')).toStrictEqual('B11')
})

test('2. returns N34',  () => {
    expect(getNextBingoNumber('N33')).toStrictEqual('N34')
})

test('3. returns N31',  () => {
    expect(getNextBingoNumber('I30')).toStrictEqual('N31')
})

test('4. returns O61',  () => {
    expect(getNextBingoNumber('G60')).toStrictEqual('O61')
})

test('5. returns B1',  () => {
    expect(getNextBingoNumber('O75')).toStrictEqual('B1')
})