"use strict";
class motherAccount {
    constructor(initialBalance = 0) {
        this.initialBalance = initialBalance;
    }
    oneDeposit(depositNumber) {
        this.initialBalance = this.initialBalance + depositNumber;
        return this.initialBalance;
    }
    oneWithdraw(withdrawNumber) {
        this.initialBalance = this.initialBalance - withdrawNumber;
        return this.initialBalance;
    }
    addInterest() {
        this.initialBalance =
            this.initialBalance + (this.initialBalance * 10) / 100;
        return this.initialBalance;
    }
}
let motherPerson = new motherAccount(0);
console.log(motherPerson.initialBalance);
motherPerson.oneDeposit(500);
console.log(motherPerson.initialBalance);
motherPerson.oneDeposit(600);
console.log(motherPerson.initialBalance);
motherPerson.oneWithdraw(300);
console.log(motherPerson.initialBalance);
motherPerson.addInterest();
console.log(motherPerson.initialBalance);
