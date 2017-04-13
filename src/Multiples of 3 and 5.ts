class Multiples_of_3_and_5 {
    // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    // Find the sum of all the multiples of 3 or 5 below 1000.

    multiples(a: number, b: number, max: number) {
        var min_number = Math.min(a, b);

        var sieve = new Array(max);
        var sum = 0;

        for (var index = min_number; index <= max; index++) {

            if (index % a === 0 || index % b === 0) {
                sum += index;
            }
        }

        return sum;
    }
}