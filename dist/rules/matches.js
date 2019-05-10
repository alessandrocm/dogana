"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function matches(regex, message) {
    if (message === void 0) { message = 'must be a valid format'; }
    return {
        matches: {
            message: message,
            options: regex
        }
    };
}
exports.default = matches;
//# sourceMappingURL=matches.js.map