import { IComponent } from "./IComponent";

/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
export class Decorator implements IComponent {
    protected _component: IComponent;

    constructor(component: IComponent) {
        this._component = component;
    }

    public operation(): string {
        return this._component.operation();
    }

}