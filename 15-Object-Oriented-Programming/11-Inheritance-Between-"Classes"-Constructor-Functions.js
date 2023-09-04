const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
// this should be written first
Student.prototype = Object.create(Person.prototype);

// this should be written second
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce(); // -> My name is Mike and I study Computer Science
mike.calcAge(); // -> 17

console.log(mike.__proto__); // -> Person {introduce: ƒ}
console.log(mike.__proto__.__proto__); // -> {calcAge: ƒ, constructor: ƒ}

console.log(mike instanceof Student); // -> true
console.log(mike instanceof Person); // -> true
console.log(mike instanceof Object); // -> true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // -> ƒ Student(firstName, birthYear, course)
