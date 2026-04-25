// Added api
const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const handleSearch = (event) => {
  event.preventDefault();
  const getSearch = document.getElementById("search-input");
  const search = getSearch.value;
  console.log("User searched for:", search);
  fetchWord(search);
};

const form = document.getElementById("search-form");
form.addEventListener("submit", handleSearch);

const fetchWord = async (word) => {
  console.log("Fetching..." /* Something will get passed here most likey*/);
  const apiLink = api + word;
  console.log(apiLink);
  try {
    const res = await fetch(apiLink);
    if (!res.ok) {
      throw new Error("Network issue");
    }
    const parse = await res.json();
    displayWord(parse);
  } catch (e) {
    console.log("Error:", e);
  }
};

const displayWord = (data) => {
  const results = document.getElementById("results");
  results.innerHTML = "";

  const entry = data[0];

  const word = entry.word;
  const definition = entry.meanings[0].definitions[0].definition;

  results.innerHTML = `
    <h2>${word}</h2>
    <p>${definition}</p>
  `;
};
