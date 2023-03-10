import axios from "axios";


// const allCharacters = async (state, currentPage, searchTerm) => {
//   const url = `https://swapi.dev/api/people/?page=${currentPage}${searchTerm ? `&search=${searchTerm}` : ""}`;
//   const response = await axios.get(url);
//   state(response.data.results);
// }


const allCharacters = async (state, currentPage, searchTerm) => {
  let url = `https://swapi.dev/api/people/?page=${currentPage}`;
  if (searchTerm) {
    url += `&search=${searchTerm}`;
  }
  const response = await axios.get(url);
  state(response.data.results);
};

// const allCharacters = async (state, currentPage, searchTerm ) => {
//   const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
//   state(response.data.results);
// }

// const characterName = async (name, state) => {
//   const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
//   state(response.data);
// }

export {
  allCharacters,
  // characterName
};
