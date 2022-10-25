"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
}
var Mesi;
(function (Mesi) {
    Mesi[Mesi["GENNAIO"] = 0] = "GENNAIO";
    Mesi[Mesi["FEBBRAIO"] = 1] = "FEBBRAIO";
    Mesi[Mesi["MARZO"] = 2] = "MARZO";
    Mesi[Mesi["APRILE"] = 3] = "APRILE";
})(Mesi || (Mesi = {}));
let mese;
mese = Mesi.GENNAIO; //Rappresentazione testuale del dato
mese = 0; //Posizione dell'indice
let arr1 = [];
let a1 = new Animal("Mario");
let a2 = new Animal("Luigi");
let a3 = new Animal("Antonio");
let arr2 = [];
arr2.push(a1);
arr2.push(a2);
arr2.push(a3);
//arr2.unshift(a2)
//arr2.pop()
//arr2.shift()
console.log(arr2);
arr2.splice(1 /*Posizione da cui inizio a eliminare*/, 1 /*Elementi da eliminare*/, new Animal("Gino") /*Elemento da aggiungere*/);
arr2.forEach((ele) => console.log(ele));
