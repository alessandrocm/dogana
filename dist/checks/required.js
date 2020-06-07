"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var utilities_1 = require("../utilities");
function required(value) {
    return helpers_1.validValue(!utilities_1.isNil(value));
}
exports.default = required;
//# sourceMappingURL=required.js.map