"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./checks/helpers");
var checks_1 = require("./checks");
function validate(value, method, options, source) {
    if (!method) {
        return helpers_1.validValue();
    }
    return checks_1.validators[method](value, options);
}
exports.default = validate;
//# sourceMappingURL=validate.js.map