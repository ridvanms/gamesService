// const url = `https://jsonplaceholder.typicode.com/users`

// const response = await fetch(url);
// const data = await response.json();
// console.log(data);

// function testing(url){
//     let res = await fetch(url)
//     let d = await res.json();

//     return d
// }
// testing(url)
let a, b;
b = 10;
if (true) {
  const { number } = await import("../script2.js");
  a = number;
  b += number;
}
console.log(a, b);
