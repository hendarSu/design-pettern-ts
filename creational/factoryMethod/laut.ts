import { LautanNusantara } from "./laut-logistik/lautan-nusantara";
import { Logistic } from "./logistic";
import { LogisticObject } from "./logistic-object";

export class Laut extends Logistic {
    public factoryMethod(): LogisticObject {
        return new LautanNusantara();
    }

}