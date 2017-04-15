
describe("Common Math Functions", function () {
    it("Biggest Common Denominator : 3 & 5 : 1", function () {
        var result = MathCommon.BiggestCommonDenominator(3, 5);
        expect(result).toBe(1);
    });

    it("Biggest Common Denominator : 15 & 9 : 3", function () {
        var result = MathCommon.BiggestCommonDenominator(15, 9);
        expect(result).toBe(3);
    });
    it("Biggest Common Denominator : 84 & 18 : 3", function () {
        var result = MathCommon.BiggestCommonDenominator(84, 18);
        expect(result).toBe(6);
    });
});

describe("Smallest Common Multiple", function () {
    it(" 3 & 5 : 15", function () {
        var result = MathCommon.SmallestCommonMultiple(3, 5);
        expect(result).toBe(15);
    });

    it("15 & 9 : 45", function () {
        var result = MathCommon.SmallestCommonMultiple(15, 9);
        expect(result).toBe(45);
    });
    it("84 & 18 : 3", function () {
        var result = MathCommon.SmallestCommonMultiple(84, 18);
        expect(result).toBe(252);
    });
});


describe("Sum Arithmetic Progression", function () {
    it("a = 3, start = 1, end = 10", function () {
        var result = MathCommon.SumArithmeticProgression(3, 1, 10);
        expect(result).toBe(165);
    });

    it("a = 1, start = 1, end = 100", function () {
        var result = MathCommon.SumArithmeticProgression(1, 1, 100);
        expect(result).toBe(5050);
    });
});