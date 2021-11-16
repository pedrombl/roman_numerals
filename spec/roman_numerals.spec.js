const roman_numerals = require('../roman_numerals')


describe("Roman Numerals", function () {
  it("returns I when input is 1", function () {
    expect(roman_numerals(1)).toBe("I");
  });

  it("returns II when input is 2", function () {
    expect(roman_numerals(2)).toBe("II");
  });
  it("returns IV when input is 4", function () {
    expect(roman_numerals(4)).toBe("IV");
  });

  it("returns the string V when input is 5", function () {
    expect(roman_numerals(5)).toBe("V");
  });
  it("returns the string VI when input is 6", function () {
    expect(roman_numerals(6)).toBe("VI");
  });

  it("returns the string IX when input is 9", function () {
    expect(roman_numerals(9)).toBe("IX");
  });

  it("returns the string X when input is 10", function () {
    expect(roman_numerals(10)).toBe("X");
  });

  it("returns the string XI when input is 11", function () {
    expect(roman_numerals(11)).toBe("XI");
  });

  it("returns the string XV when input is 15", function () {
    expect(roman_numerals(15)).toBe("XV");
  });

  it("returns the string XIX when input is 19", function () {
    expect(roman_numerals(19)).toBe("XIX");
  });

  it("returns the string XX when input is 20", function () {
    expect(roman_numerals(20)).toBe("XX");
  });

  it("returns the string XXI when input is 21", function () {
    expect(roman_numerals(21)).toBe("XXI");
  });

  it("returns the string XL when input is 40", function () {
    expect(roman_numerals(40)).toBe("XL");
  });

  it("returns the string XLI when input is 4I", function () {
    expect(roman_numerals(41)).toBe("XLI");
  });

  it("returns the string L when input is 50", function () {
    expect(roman_numerals(50)).toBe("L");
  });

  it("returns the string LI when input is 51", function () {
    expect(roman_numerals(51)).toBe("LI");
  });

  it("returns the string LXXVII when input is 77", function () {
    expect(roman_numerals(77)).toBe("LXXVII");
  });

  it("returns the string XC when input is 90", function () {
    expect(roman_numerals(90)).toBe("XC");
  });

  it("returns the string C when input is 100", function () {
    expect(roman_numerals(100)).toBe("C");
  });

  it("returns the string CDI when input is 401", function () {
    expect(roman_numerals(401)).toBe("CDI");
  });

  it("returns the string DL when input is 550", function () {
    expect(roman_numerals(550)).toBe("DL");
  });
  it("returns the string M when input is 1000", function () {
    expect(roman_numerals(1000)).toBe("M");
  });

});