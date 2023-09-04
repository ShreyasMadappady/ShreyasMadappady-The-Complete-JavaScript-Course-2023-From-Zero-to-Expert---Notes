// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property //-> Does not actually make the property truly private because this is just a convention. So it's something that developers agree to use and then everyone does it this way. But since it is not truly private we call this protected, so protected property.
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) { // -> problem here, is that right now no browser actually supports this. So I can just show you how it works in the code
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000); // -> Loan approved
console.log(acc1.getMovements()); // -> (3) [250, -140, 1000]
console.log(acc1); // -> Account {locale: 'en-US', owner: 'Jonas', currency: 'EUR', #movements: Array(3), #pin: 1111}
Account.helper(); // -> Helper

// console.log(acc1.#movements); // -> Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class (at demo.  js:80:17)
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));
