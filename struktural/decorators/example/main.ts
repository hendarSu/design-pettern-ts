import { ConcreteCar } from "./ConcreteCar";
import { ICar } from "./ICar";
import { Lamborghini } from "./Lamorghini";
import { Mustang } from "./Mustang";

function clientCode(car: ICar, name: string) {
    console.log(`For ${name} Max speed is ${car.maxSpeed()}/mph`);
}

const car = new ConcreteCar();
console.log('Client: I\'ve got a Car:');
clientCode(car, 'MPV');
console.log('');

const decorator1 = new Lamborghini(car);
const decorator2 = new Mustang(decorator1);
console.log('Client: Now I\'ve got a decorated car:');
clientCode(decorator1, 'Lamborgini');
clientCode(decorator2, 'Mustang');
