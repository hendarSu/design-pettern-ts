"use strict";
exports.__esModule = true;
exports.Decorator = void 0;
/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this._component = component;
    }
    Decorator.prototype.operation = function () {
        return this._component.operation();
    };
    return Decorator;
}());
exports.Decorator = Decorator;
