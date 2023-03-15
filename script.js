// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

const CATEGORIES = [
  { name: "technology", color: "#194b9c" },
  { name: "science", color: "#2c613f" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// ==== DOM Manipulation ====
// We can use properties from JS DOM object to select HTML elements and manipulate it.

// Selecting DOM (html) elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

// async function loadFacts() makes the function asynchronous.
// This means that the function will not block the execution of the rest of the code.
// It will run in the background and when it is finished,
// it will continue with the rest of the code.
async function loadFacts() {
  // Fetch data from Supabase: Copy the Project URL from Supabase

  // Next we need to specify the headers (the data we want to send to the server). In
  // this case we need to specify the API key and the authorization token.
  const res = await fetch(
    "https://xchxnhmbdwdtqullamia.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjaHhuaG1iZHdkdHF1bGxhbWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NDg1MTIsImV4cCI6MTk5NDQyNDUxMn0.yAD4nhKXDD4XRtriKXwf7lId9w6dgMxaMrWKXke_zlk",
        authorization:
          // Bearer keyword is used to specify that the token is a JWT token.
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjaHhuaG1iZHdkdHF1bGxhbWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NDg1MTIsImV4cCI6MTk5NDQyNDUxMn0.yAD4nhKXDD4XRtriKXwf7lId9w6dgMxaMrWKXke_zlk",
      },
    }
  );
  // Result for fetch is a promise. We need to wait for the promise to be resolved. After,
  // we can use the data.
  const data = await res.json();
  // console.log(data);
  // const filteredData = data.filter((fact) => fact.category === "technology");

  createFactsList(data);
}

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
  </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));

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
