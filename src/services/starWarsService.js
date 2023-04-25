import axios from 'axios';

export const getPerson = async (currentPage) => {
  const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
  return response.data;
}