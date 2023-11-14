"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Pomodoro() {
    var pomodoroTime = {
        minute: 25,
        second: 0,
    };
    function getTime() {
        return pomodoroTime;
    }
    return { getTime: getTime };
}
exports.default = Pomodoro;
