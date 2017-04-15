describe("Sum of Fibonacci even numbers", function () {
    let testData: Array<TestCommon> = [
        { max: 40, result: 44 },
        { max: 4000, result: 3382 },
        { max: 4000000, result: 4613732 }
    ];

    testData.forEach(element => {
        it("max " + element.max + " expected result = " + element.result,
            function () {
                var result = Problem2.EvenFibonacciSum(element.max);
                expect(result).toBe(element.result);
            });
    });
});
