"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLength(options, message) {
    if (options === void 0) { options = { min: 1 }; }
    if (message === void 0) { message = 'must be the correct length'; }
    return {
        isLength: {
            message: message,
            options: options
        }
    };
}
exports.default = isLength;
//# sourceMappingURL=length.js.map