describe("Person FullName", function () {
    it("should sum multiples of 3 and 5 that are lower then 10", function () {
        var result = MathMultiples.multiples(3, 5, 10);

        expect(result).toBe(23);
    });

    it("should sum multiples of 3 and 5 that are lower then 10", function () {
        var result = MathMultiples.multiples(3, 5, 100);

        expect(result).toBe(2318);
    });
});


describe("Multiples using Sum of Arithmetic Progression", function () {
    [{ a: 3, b: 5, max: 10, result: 23 }]

    it("sum of multiples of 3 and 5 lower then 10", function () {
        var result = MathMultiples.multiples(3, 5, 10);

        expect(result).toBe(23);
    });

    it("should sum multiples of 3 and 5 that are lower then 10", function () {
        var result = MathMultiples.multiples(3, 5, 100);

        expect(result).toBe(2318);
    });
});