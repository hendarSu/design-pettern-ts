import { AbstractFactory } from "./abstract-factory.interface";
import { AbstractProductA } from "./abstract-producta.interface";
import { AbstractProductB } from "./abstract-productb.interface";
import { ConcreteProductA } from "./concrate-producta";
import { ConcreteProductB } from "./concrete-productb";


export class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB();
    }
}