import { AbstractProductA } from "./abstract-producta.interface";
import { AbstractProductB } from "./abstract-productb.interface";

export class ConcreteProductB implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'hasil dari produk B.'
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `hasil dari produk B kolaborasi dengan (${result})`;
    }
}