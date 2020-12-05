"use strict";
exports.__esModule = true;
exports.ConcreteComponent = void 0;
/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent() {
    }
    ConcreteComponent.prototype.operation = function () {
        return 'ConcreteComponent';
    };
    return ConcreteComponent;
}());
exports.ConcreteComponent = ConcreteComponent;
