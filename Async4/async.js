let a = 1;
let b = 2;

setTimeout(() => {
  console.log("Async");
}, 2000);

// fetch("http://example.com/movies.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

console.log("Synchronus");

console.log(a);
console.log(b);
