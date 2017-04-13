/// <reference path="./../node_modules/@types/jasmine/index.d.ts" />

describe( "Person FullName", function () {
    var person;

    beforeEach(function () {
    });

    it("should sum multiples of 3 and 5 that are lower then 10", function () {
        var multiples = new Multiples_of_3_and_5();

        var result = multiples.multiples(3, 5, 10);

        expect(result).toBe(23);
    });
});
