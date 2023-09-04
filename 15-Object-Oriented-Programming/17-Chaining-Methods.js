// Chaining method is at the bottom!
class Account {
  locale = navigator.language;

  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // "return this" is must for Chaining
  }

  withdraw(val) {
    this.deposit(-val);
    return this; // "return this" is must for Chaining
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this; // "return this" is must for Chaining
    }
  }

  static helper() {
    console.log('Helper');
  }

  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000); // -> Loan approved
console.log(acc1.getMovements()); // -> (8) [250, -140, 1000, 300, 500, -35, 25000, -4000]
