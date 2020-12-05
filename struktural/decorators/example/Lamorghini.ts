import { CarDecorator } from "./CarDecorator";

export class Lamborghini extends CarDecorator {
    public maxSpeed(): number {
        return (super.maxSpeed() + 30);
    }
}