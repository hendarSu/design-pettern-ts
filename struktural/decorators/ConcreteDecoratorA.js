"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ConcreteDecoratorA = void 0;
var Decorator_1 = require("./Decorator");
/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
var ConcreteDecoratorA = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorA, _super);
    function ConcreteDecoratorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    ConcreteDecoratorA.prototype.operation = function () {
        return "ConcreteDecoratorA(" + _super.prototype.operation.call(this) + ")";
    };
    return ConcreteDecoratorA;
}(Decorator_1.Decorator));
exports.ConcreteDecoratorA = ConcreteDecoratorA;
