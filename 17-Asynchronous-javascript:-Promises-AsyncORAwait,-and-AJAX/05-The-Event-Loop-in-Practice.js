console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end');

// Test start
// Test end
// Resolved promise 1
// Resolved promise 2
// 0 sec timer

// -> you see, that now only after all this work, the zero second timer message appeared on the screen. And so this is actual proof that these zero seconds that we have here are not a guarantee.

// -> you cannot really do high precision things using JavaScript timers.
