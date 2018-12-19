import { calculateSimple } from "./../calculator";

describe("calculator", () => {
    describe("calculateSimple", () => {
        it("calculates simple addition", () => {
            expect(calculateSimple("3a2")).toEqual(5);
        });
        it("calculates simple subtraction", () => {
            expect(calculateSimple("3b2")).toEqual(1);
        });
        it("calculates simple multiplication", () => {
            expect(calculateSimple("3c2")).toEqual(6);
        });
        it("calculates simple division", () => {
            expect(calculateSimple("6d2")).toEqual(3);
        });
        it("calculates with multiple operators", () => {
            expect(calculateSimple("3c2b2")).toEqual(4);
        });
    });
});