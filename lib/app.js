"use strict";
var Messenger = /** @class */ (function () {
    function Messenger() {
    }
    Messenger.prototype.message = function (name) {
        return "Hello from the Messenger class, " + name;
    };
    return Messenger;
}());
module.exports = Messenger;
