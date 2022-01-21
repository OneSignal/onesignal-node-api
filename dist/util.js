"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCodeInRange = void 0;
function isCodeInRange(codeRange, code) {
    if (codeRange === "0") {
        return true;
    }
    if (codeRange == code.toString()) {
        return true;
    }
    else {
        var codeString = code.toString();
        if (codeString.length != codeRange.length) {
            return false;
        }
        for (var i = 0; i < codeString.length; i++) {
            if (codeRange.charAt(i) != "X" && codeRange.charAt(i) != codeString.charAt(i)) {
                return false;
            }
        }
        return true;
    }
}
exports.isCodeInRange = isCodeInRange;
//# sourceMappingURL=util.js.map