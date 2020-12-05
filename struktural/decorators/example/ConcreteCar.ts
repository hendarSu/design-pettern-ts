import { ICar } from "./ICar";

export class ConcreteCar implements ICar {
    public maxSpeed(): number {
        return 320;
    }
}