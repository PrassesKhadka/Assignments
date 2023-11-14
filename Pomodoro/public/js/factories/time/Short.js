"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Short() {
    var shortTime = {
        minute: 5,
        second: 0,
    };
    function getTime() {
        return shortTime;
    }
    return { getTime: getTime };
}
exports.default = Short;
