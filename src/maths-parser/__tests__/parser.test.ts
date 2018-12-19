import { parseSimple } from "./../parser";
import { operators } from "../operators";

describe("parser", () => {
    describe("parseSimple", () => {
        it("splits string into array", () => {
            expect(parseSimple("3a2")).toEqual([3, operators.a, 2]);
        });
        it("splits multiple digit numbers into array", () => {
            expect(parseSimple("30b20")).toEqual([30, operators.b, 20]);
        });
        it("splits multiple operators into array", () => {
            expect(parseSimple("3a2b4")).toEqual([3, operators.a, 2, operators.b, 4]);
        });
    });
});