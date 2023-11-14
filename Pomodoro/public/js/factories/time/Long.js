"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Long() {
    var longTime = {
        minute: 10,
        second: 0,
    };
    function getTime() {
        return longTime;
    }
    return { getTime: getTime };
}
exports.default = Long;
