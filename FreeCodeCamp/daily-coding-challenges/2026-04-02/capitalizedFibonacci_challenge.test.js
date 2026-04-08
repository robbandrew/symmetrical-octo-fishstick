const capitalizeFibonacci = require('./capitalizedFibonacci_challenge')

test('1. returns HELLo woRld',  () => {
    expect(capitalizeFibonacci('hello world')).toStrictEqual('HELLo woRld')
})

test('2. returns HELLo woRld',  () => {
    expect(capitalizeFibonacci('HELLO WORLD')).toStrictEqual('HELLo woRld')
})

test('3. returns HELLo, wOrld!',  () => {
    expect(capitalizeFibonacci('hello, world!')).toStrictEqual('HELLo, wOrld!')
})

test('4. returns THE qUicK broWn fox jUmped over thE lazy dog.',  () => {
    expect(capitalizeFibonacci('The quick brown fox jumped over the lazy dog.'))
    .toStrictEqual('THE qUicK broWn fox jUmped over thE lazy dog.')
})

test('5. returns LOREm ipSum dOlor sit amet, consecTetur adipiscing elit. proin pulvinar ex nibh, vel ullaMcorper ligula egestas quis. integer tincidunt fringillA accumsan. integer et metus placerat, gravida felis at, pellentesque nisl.',  () => {
    expect(capitalizeFibonacci('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar ex nibh, vel ullamcorper ligula egestas quis. Integer tincidunt fringilla accumsan. Integer et metus placerat, gravida felis at, pellentesque nisl.'))
    .toStrictEqual('LOREm ipSum dOlor sit amet, consecTetur adipiscing elit. proin pulvinar ex nibh, vel ullaMcorper ligula egestas quis. integer tincidunt fringillA accumsan. integer et metus placerat, gravida felis at, pellentesque nisl.')
})