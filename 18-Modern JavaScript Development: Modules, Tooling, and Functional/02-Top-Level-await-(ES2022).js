// we can now use the await keyword outside of async functions, at least in modules So that's why this is here in the module section. So again, as I just said, because this is really important, we can now basically use the await keyword outside of an async function, which we call top-level await. Just remember that this only works in modules. If we were gonna try this in a normal script, like we have been using before this section, then top level await would still fail, so it would not work at all. But here in our HTML file, we can still see that we have our type set to module. So this is what is required in order to make top-level await actually work.


// Top-Level Await (ES2022)

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
