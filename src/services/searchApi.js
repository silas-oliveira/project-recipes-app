const FOOD_URL = 'https://www.themealdb.com/api/json/v1/1/';
const DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

const searchApi = async (type, query, local) => {
  const API_URL = local === 'Bebidas' ? DRINK_URL : FOOD_URL;
  const KEY = local === 'Bebidas' ? 'drinks' : 'meals';
  try {
    switch (type) {
    case 'Ingrediente':
      return (
        await (await fetch(`${API_URL}filter.php?i=${query}`)).json())[KEY];
    case 'Nome':
      return (
        await (await fetch(`${API_URL}search.php?s=${query}`)).json())[KEY];
    case 'Primeira letra':
      return (
        await (await fetch(`${API_URL}search.php?f=${query}`)).json())[KEY];
    default:
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export default searchApi;
