
class MathCommon {

    // Biggest Common Denominator ( BCD )
    static BiggestCommonDenominator(a: number, b: number): number {
        var min = Math.min(a, b);
        var max = Math.max(a, b);

        var recurringFunction = function (a: number, b: number): number {
            if (b === 0)
                return a;
            return recurringFunction(b, a % b);
        }

        return recurringFunction(min, max);
    }

    // Smallest Common Multiple (SCM)
    // SCM = a * b / BCD(a,b)
    static SmallestCommonMultiple(a: number, b: number): number {
        var scm = a * b / MathCommon.BiggestCommonDenominator(a, b);
        return scm;
    }

    static SumArithmeticProgression(a: number, start: number, end: number): number {
        var a1 = a * start;
        var an = a * end;
        var n = end - start + 1;

        var sum = (a1 + an) / 2 * n;
        return sum;
    }
}