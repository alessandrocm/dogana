"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function either(message) {
    var rules = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rules[_i - 1] = arguments[_i];
    }
    return {
        either: {
            message: message,
            options: rules
        }
    };
}
exports.default = either;
//# sourceMappingURL=either.js.map