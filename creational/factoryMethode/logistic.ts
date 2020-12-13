import { LogisticObject } from "./logistic-object";

export abstract class Logistic {
    /** catatan, untuk abstract logistic class ini kita menyediakan default factory method. */

    public abstract factoryMethod(): LogisticObject;

    public someOpratio(): string {
        const objectFactory = this.factoryMethod();
        return `Logistic: the same logistic code has just worked with ${objectFactory.opration()}`
    }
}