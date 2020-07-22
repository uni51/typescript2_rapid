"use strict";
exports.__esModule = true;
exports.Util = exports.showMessage = void 0;
var TITLE = "速習TypeScript";
function showMessage() {
    console.log("\u3088\u3046\u3053\u305D\u3001" + TITLE);
}
exports.showMessage = showMessage;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getVersion = function () {
        return "1.0.0";
    };
    return Util;
}());
exports.Util = Util;
