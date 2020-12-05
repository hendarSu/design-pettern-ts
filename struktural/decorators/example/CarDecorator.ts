import { ICar } from "./ICar";

export class CarDecorator implements ICar {

    protected _cars : ICar;

    constructor(car: ICar) {
        this._cars = car;
    }

    public maxSpeed(): number {
        return this._cars.maxSpeed();
    }

}