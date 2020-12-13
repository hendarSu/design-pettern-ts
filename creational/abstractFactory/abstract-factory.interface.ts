import { AbstractProductA } from "./abstract-producta.interface";
import { AbstractProductB } from "./abstract-productb.interface";


export interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}