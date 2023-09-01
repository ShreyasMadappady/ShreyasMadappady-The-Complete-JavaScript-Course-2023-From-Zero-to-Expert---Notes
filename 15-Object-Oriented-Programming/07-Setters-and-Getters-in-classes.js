class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const walter = new PersonCl('Walter', 1965); // -> we get this error."Walter is not a full name"

const walter = new PersonCl('Walter White', 1965); // -> if we then put it as a full name, so Walter White like this, then we get the _fullName. But just like before we can then also access walter.fullName because of that setter or actually of that getter that we just defined earlier.

console.log(walter._fullName); // -> Walter White

console.log(walter.fullName); // -> Walter White

