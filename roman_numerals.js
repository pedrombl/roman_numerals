function roman_numerals(input) {
  let romanTable = {
    M: 1000,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4
  }

  for (let romanChar in romanTable) {
    number = romanTable[romanChar]

    if (input >= number) {
      return romanChar + roman_numerals(input - number)
    }
  }

  return repeatI(input)
}

function repeatI(input) {
  return "I".repeat(input)
}

module.exports = roman_numerals;


