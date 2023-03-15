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
//   This means that the function will not block the execution of the rest of the code.
//     It will run in the background and when it is finished,
//       it will continue with the rest of the code.
async function loadFacts() {
  // Fetch data from Supabase: Copy the Project URL from Supabase

  // Next we need to specify the headers (the data we want to send to the server). In
  //  this case we need to specify the API key and the authorization token.
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
  //   we can use the data.
  const data = await res.json();

  createFactsList(data);
}

function createFactsList(dataArray) {
  // map() method creates a new array with the
  //  results of calling a function for every array element.
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
