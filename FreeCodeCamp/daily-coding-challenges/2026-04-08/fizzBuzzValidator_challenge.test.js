const isFizzBuzz = require('./fizzBuzzValidator_challenge')

test('1. returns true',  () => {
    expect(isFizzBuzz([1,2,"Fizz",4,"Buzz"])).toBe(true)
})

test('2. returns true',  () => {
    expect(isFizzBuzz([13, 14, "FizzBuzz", 16, 17])).toBe(true)
})

test('3. returns false',  () => {
    expect(isFizzBuzz([13, 14, "Fizz", 16, 17])).toBe(false)
})

test('4. returns true',  () => {
    expect(isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"])).toBe(true)
})

test('5. returns false',  () => {
    expect(isFizzBuzz([1, 2, "Fizz", "Buzz", 5])).toBe(false)
})

test('6. returns false',  () => {
    expect(isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103])).toBe(false)
})

test('7. returns true',  () => {
    expect(isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"])).toBe(true)
})