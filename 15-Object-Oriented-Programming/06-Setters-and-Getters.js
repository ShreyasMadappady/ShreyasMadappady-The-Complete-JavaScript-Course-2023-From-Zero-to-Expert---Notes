const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // -> 300

account.latest = 50;
console.log(account.movements); // -> [ 200, 530, 120, 300, 50 ]

// Now however, classes do also have getters and setters, and they do indeed work in the exact same way.
