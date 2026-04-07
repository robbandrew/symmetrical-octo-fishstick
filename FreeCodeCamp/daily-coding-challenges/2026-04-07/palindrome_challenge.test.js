const palindromeLocator = require('./palindrome_challenge')

test('returns e',  () => {
    expect(palindromeLocator('racecar')).toBe('e')
})

test('returns v',  () => {
    expect(palindromeLocator('level')).toBe('v')
})

test('returns none if not a palindrome',  () => {
    expect(palindromeLocator('freecodecamp')).toBe('none')
})

test('returns oo',  () => {
    expect(palindromeLocator('noon')).toBe('oo')
})

test('returns 00',  () => {
    expect(palindromeLocator('11100111')).toBe('00')
})
