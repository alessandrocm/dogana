"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function required(message) {
    if (message === void 0) { message = 'is required'; }
    return {
        required: {
            message: message
        }
    };
}
exports.default = required;
//# sourceMappingURL=required.js.map