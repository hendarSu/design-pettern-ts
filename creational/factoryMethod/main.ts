import { Jne } from "./darat-logistik/jne";
import { Darat } from "./datar";
import { Laut } from "./laut";
import { Logistic } from "./logistic";
import { Udara } from "./udara";

function clientCode(logistic : Logistic) {
    console.log('Client : saya menggunakan logistik');
    console.log(logistic.someOpratio());
}

clientCode(new Darat());
console.log('');
clientCode(new Udara());
console.log('');
clientCode(new Laut());
console.log('');
