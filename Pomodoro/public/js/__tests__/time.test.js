"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pomodoro_1 = __importDefault(require("../factories/time/Pomodoro"));
var Long_1 = __importDefault(require("../factories/time/Long"));
var Short_1 = __importDefault(require("../factories/time/Short"));
describe("Time", function () {
    var pomodoro = (0, Pomodoro_1.default)();
    var short = (0, Short_1.default)();
    var long = (0, Long_1.default)();
    beforeEach(function () {
        pomodoro;
        short;
        long;
    });
    it("time works fine", function () {
        expect(pomodoro.getTime()).toEqual({ minute: 25, second: 0 });
        expect(short.getTime()).toEqual({ minute: 5, second: 0 });
        expect(long.getTime()).toEqual({ minute: 10, second: 0 });
    });
});
