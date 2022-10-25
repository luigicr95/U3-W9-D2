class motherAccount {
  initialBalance: number;
  constructor(initialBalance: number = 0) {
    this.initialBalance = initialBalance;
  }
  oneDeposit(depositNumber: number): number {
    this.initialBalance = this.initialBalance + depositNumber;
    console.log(depositNumber);
    console.log(this.initialBalance);
    return this.initialBalance;
  }

  oneWithdraw(withdrawNumber: number): number {
    this.initialBalance = this.initialBalance - withdrawNumber;
    console.log(motherPerson.initialBalance);
    return this.initialBalance;
  }

  addInterest(): number {
    this.initialBalance =
      this.initialBalance + (this.initialBalance * 10) / 100;
    console.log(motherPerson.initialBalance);
    return this.initialBalance;
  }
}

let motherPerson = new motherAccount();
motherPerson.oneDeposit(500);
motherPerson.oneDeposit(600);
motherPerson.oneWithdraw(300);
motherPerson.addInterest();

let depositButton = document.querySelector("button:nth-of-type(1)");
depositButton?.addEventListener("click", function () {
  motherPerson.oneDeposit(
    parseInt((document.querySelector("input") as HTMLInputElement).value)
  );
});

// let withdrawButton = document.querySelector("button:nth-of-type(2)");
// withdrawButton?.addEventListener("click", function () {
//   motherPerson.oneWithdraw(depositValue);
// });
