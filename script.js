console.log("Hello World!");

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
// const numbers = [1, true, 3, "Hi", 5];
