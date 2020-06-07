"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("../utilities");
function validValue(passes) {
    if (passes === void 0) { passes = true; }
    if (typeof passes === 'boolean') {
        return { valid: passes };
    }
    else {
        return passes;
    }
}
exports.validValue = validValue;
function nullOrValid(value, validate) {
    if (utilities_1.isNil(value)) {
        return validValue();
    }
    return validValue(validate(value));
}
exports.nullOrValid = nullOrValid;
//# sourceMappingURL=helpers.js.map