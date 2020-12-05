import { CarDecorator } from "./CarDecorator";

export class Mustang extends CarDecorator {
    public maxSpeed(): number {
        return (super.maxSpeed() + 10);
    }
}