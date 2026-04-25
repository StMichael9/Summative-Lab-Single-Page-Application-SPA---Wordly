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
};
