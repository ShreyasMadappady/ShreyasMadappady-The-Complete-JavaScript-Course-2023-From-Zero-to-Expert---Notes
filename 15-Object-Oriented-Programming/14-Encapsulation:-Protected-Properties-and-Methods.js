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

    // Protected property //-> Does not actually make the property truly private because this is just a convention. So it's something that developers agree to use and then everyone does it this way. But since it is not truly private we call this protected, so protected property. so its just for the dvelopers to understand to not to use this compoent outside the class.
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
}
