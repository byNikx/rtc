"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var world = '🗺️';
function hello(word) {
    if (word === void 0) { word = world; }
    return "Hello " + world + "! ";
}
exports.hello = hello;
var Fruit = /** @class */ (function () {
    function Fruit() {
    }
    Fruit.prototype.test = function () {
        return 'test!';
    };
    return Fruit;
}());
exports.Fruit = Fruit;
//# sourceMappingURL=index.js.map