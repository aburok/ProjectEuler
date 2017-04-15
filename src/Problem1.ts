class MathMultiples {
    // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    // Find the sum of all the multiples of 3 or 5 below 1000.

    static multiples(a: number, b: number, max: number): number {
        var min_number = Math.min(a, b);

        var sieve = new Array(max);
        var sum = 0;

        for (var index = min_number; index < max; index++) {
            if (index % a === 0 || index % b === 0) {
                sum += index;
            }
        }

        return sum;
    }

    static multiplesWithSum(a: number, b: number, max: number): number {
        var maxA = Math.floor(max / a);
        var maxB = Math.floor(max / b);
        var scm = MathCommon.SmallestCommonMultiple(a, b);
        var maxScm = Math.floor(max / scm);

        var sumA = MathCommon.SumArithmeticProgression(a, 1, maxA);
        var sumB = MathCommon.SumArithmeticProgression(b, 1, maxB);
        var sumSCM = MathCommon.SumArithmeticProgression(scm, 1, maxScm);

        var sum = sumA + sumB - sumSCM;

        return sum;
    }

}