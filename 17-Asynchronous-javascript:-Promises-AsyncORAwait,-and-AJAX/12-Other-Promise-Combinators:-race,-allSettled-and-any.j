// Other Promise Combinators: race, allSettled and any

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// Promise.race

// The Promise.race() method is a JavaScript method that returns a promise that resolves or rejects as soon as one of the promises in an iterable resolves or rejects, with the value or reason from that promise.

(async function () {
  const res = await Promise.race([
    getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/egypt`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/mexico`),
  ]);
  console.log(res[0]);
})();   

// -> {alpha2Code: 'MX', alpha3Code: 'MEX', altSpellings: Array(4), area: 1964375, borders: Array(3), …}

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://countries-api-836d.onrender.com/countries/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

  // -> After 2s.... {alpha2Code: 'TZ', alpha3Code: 'TZA', altSpellings: Array(3), area: 945087, borders: Array(8), …}

// Promise.allSettled

// The Promise.allSettled() method is a JavaScript method that returns a promise that resolves when all of the promises in an iterable have settled, either fulfilled or rejected. The returned promise resolves with an array of objects, each of which describes the outcome of one of the input promises.

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

-> (3) [{…}, {…}, {…}]
0: {status: 'fulfilled', value: 'Success'}
1: {status: 'rejected', reason: 'ERROR'}
2: {status: 'fulfilled', value: 'Another success'}
length: 3
[[Prototype]]: Array(0)

// Promise.all
// The Promise.all() method is a JavaScript method that returns a promise that resolves when all of the promises in an iterable have resolved, with an array of the fulfillment values. It rejects if any of the promises in the iterable reject.

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

  // -> demo.js:61 ERROR

// Promise.any [ES2021]
// The Promise.any() method is a JavaScript method that returns a promise that resolves as soon as one of the promises in an iterable resolves, with the value from that promise. It rejects if all of the promises in the iterable reject.

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

  // -> Success
