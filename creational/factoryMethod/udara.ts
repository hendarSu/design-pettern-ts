import { Logistic } from "./logistic";
import { LogisticObject } from "./logistic-object";
import { AirAsia } from "./udara-logistik/airasia";

export class Udara extends Logistic {
    public factoryMethod(): LogisticObject {
        return new AirAsia();
    }
}