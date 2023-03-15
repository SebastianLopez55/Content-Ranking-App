console.log("Hello World!");

// ==== DOM Manipulation ====
// We can use properties from JS DOM object to select HTML elements and manipulate it.

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// ==== JS Basics ====

// == Ternary operator: helpful because it produces a value ==
// const result =
//   condition1 > condition2 ? "return value if true" : "return value if false";

// == Arrow Functions ==
// const add = (a, b) => a + b;
// Function call: add(1, 2);

// == Arrays In JS ==
// const numbers = [1, 2, 3, "Hi", true];
// const [first, second, third, string, boolean] = numbers;
// consol.log(first) will give 1
// Unpacking arrays: const [first, second, ...rest] = numbers;

// == Looping over arrays ==
// cost arr = [1, 2, 3, 4, 5];
// arr.forEach( function (element) { console.log(element) } );
// USING THE MAP METHODS
// const newArr = arr.map( (element) => element * 2 ); // [2, 4, 6, 8, 10]

// == Objects In JS ==
// const objectTest = {
//   name: "John",
//   age: 30,
//   returnAge: function () {
//     return this.age;
//   },
// };
// console.log(objectTest.returnAge()); // 30
