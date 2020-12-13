import { AbstractProductA } from "./abstract-producta.interface";

export class ConcreteProductA implements AbstractProductA {
    usefulFunctionA(): string {
       return 'Produk A.'
    }
}