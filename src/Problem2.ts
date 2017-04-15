class Problem2 {
    static EvenFibonacciSum(max: number): number {
        return this.BruteForce(max);
    }

    static BruteForce(max: number): number {
        var oneBeforeLast = 1;
        var last = 1;
        var sum = 0;
        var current = 0;

        while (current <= max) {
            current = oneBeforeLast + last;
            oneBeforeLast = last;
            last = current;

            if (current % 2 === 0) {
                sum += current;
            }
        }

        return sum;
    }
}