const handleSearch = (event) => {
  event.preventDefault();
  const getSearch = document.getElementById("search-input");
  const search = getSearch.value;
  console.log("User searched for:", search);
};

const form = document.getElementById("search-form");
form.addEventListener("submit", handleSearch);

const fetchWord = async (word) => {};
