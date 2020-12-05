"use strict";
exports.__esModule = true;
var ConcreteComponent_1 = require("./ConcreteComponent");
var ConcreteDecoratorA_1 = require("./ConcreteDecoratorA");
var ConcreteDecoratorB_1 = require("./ConcreteDecoratorB");
/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCode(component) {
    // ...
    console.log("RESULT: " + component.operation());
    // ...
}
/**
 * This way the client code can support both simple components...
 */
var simple = new ConcreteComponent_1.ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');
/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
var decorator1 = new ConcreteDecoratorA_1.ConcreteDecoratorA(simple);
var decorator2 = new ConcreteDecoratorB_1.ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);
