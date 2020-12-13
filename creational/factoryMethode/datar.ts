import { Jne } from "./darat-logistik/jne";
import { Logistic } from "./logistic";
import { LogisticObject } from "./logistic-object";

export class Darat extends Logistic {
    public factoryMethod(): LogisticObject {
        return new Jne();
    }
}