import { AbstractProductA } from "./abstract-producta.interface";

export interface AbstractProductB {
    usefulFunctionB(): string;

    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}