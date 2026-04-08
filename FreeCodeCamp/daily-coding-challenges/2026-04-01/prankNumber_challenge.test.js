const fixPrankNumber = require('./prankNumber_challenge')

test('1. returns [2, 4, 6, 8, 10]',  () => {
    expect(fixPrankNumber([2, 4, 7, 8, 10])).toStrictEqual([2, 4, 6, 8, 10])
})

test('2. returns [10, 9, 8, 7, 6]',  () => {
    expect(fixPrankNumber([10, 10, 8, 7, 6])).toStrictEqual([10, 9, 8, 7, 6])
})

test('3. returns [12, 24, 36, 48, 60, 72, 84, 96]',  () => {
    expect(fixPrankNumber([12, 24, 36, 48, 61, 72, 84, 96])).toStrictEqual([12, 24, 36, 48, 60, 72, 84, 96])
})

test('4. returns [4, 1, -2, -5, -8, -11]',  () => {
    expect(fixPrankNumber([4, 1, -2, -5, -8, -5])).toStrictEqual([4, 1, -2, -5, -8, -11])
})

test('5. returns [0, 100, 200, 300, 400, 500]',  () => {
    expect(fixPrankNumber([0, 100, 200, 300, 150, 500])).toStrictEqual([0, 100, 200, 300, 400, 500])
})

test('6. returns [450, 425, 400, 375, 350, 325, 300]',  () => {
    expect(fixPrankNumber([400, 425, 400, 375, 350, 325, 300])).toStrictEqual([450, 425, 400, 375, 350, 325, 300])
})

test('7. returns [0, 5, 10, 15, 20]',  () => {
    expect(fixPrankNumber([-5, 5, 10, 15, 20])).toStrictEqual([0, 5, 10, 15, 20])
})