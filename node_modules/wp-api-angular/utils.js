"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stripTrailingSlash(value) {
    if (value.substring(value.length - 1, value.length) === '/') {
        return value.substring(0, value.length - 1);
    }
    else {
        return value;
    }
}
exports.stripTrailingSlash = stripTrailingSlash;
//# sourceMappingURL=utils.js.map