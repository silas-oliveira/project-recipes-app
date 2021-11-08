const API_URL = 'https://www.themealdb.com/api/json/v1/1/';

const searchApi = async (type, query) => {
  try {
    switch (type) {
    case 'Ingrediente':
      return console.log(await (await fetch(`${API_URL}filter.php?i=${query}`)).json());
    case 'Nome':
      return await (await fetch(`${API_URL}search.php?s=${query}`)).json();
    case 'Primeira letra':
      return await (await fetch(`${API_URL}search.php?f=${query}`)).json();
    default:
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export default searchApi;
