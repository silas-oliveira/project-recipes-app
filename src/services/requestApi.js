const FOOD_URL = 'https://www.themealdb.com/api/json/v1/1/';
const DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
const MEALS_URL = `${FOOD_URL}lookup.php?i=`;
const GET_MEALS_URL = `${FOOD_URL}search.php?s=`;
const DRINKS_URL = `${DRINK_URL}lookup.php?i=`;
const GET_DRINKS_URL = `${DRINK_URL}search.php?s=`;
const GET_MEALS_CATEGORIES = `${FOOD_URL}list.php?c=list`;
const GET_DRINKS_CATEGORIES = `${DRINK_URL}list.php?c=list`;
const GET_MEAL_CATEGORY = `${FOOD_URL}filter.php?c=`;
const GET_DRINK_CATEGORY = `${DRINK_URL}filter.php?c=`;

const MAX_INGREDIENTS = 20;

export async function searchApi(type, query, local) {
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
}

export async function getMeals() {
  const response = await fetch(GET_MEALS_URL);
  const data = await response.json();
  return data.meals;
}

export async function getDrinks() {
  const response = await fetch(GET_DRINKS_URL);
  const data = await response.json();
  return data.drinks;
}

export async function getById(id, local) {
  const URL = `${local === 'bebidas' ? DRINKS_URL : MEALS_URL}${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  const result = data.meals || data.drinks;
  if (result && result.length > 0) {
    const ingredients = [];
    for (let i = 1; i <= MAX_INGREDIENTS; i += 1) {
      if (result[0][`strIngredient${i}`]) {
        ingredients.push(
          `${result[0][`strIngredient${i}`]} - ${result[0][`strMeasure${i}`]}`,
        );
      } else {
        break;
      }
    }
    result[0].ingredients = ingredients;
    return result[0];
  }
  return {};
}

export async function getCategories(local) {
  const URL = local === 'bebidas' ? GET_DRINKS_CATEGORIES : GET_MEALS_CATEGORIES;
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals || data.drinks;
}

export async function getByCategory(category, local) {
  const URL = local === 'bebidas' ? GET_DRINK_CATEGORY : GET_MEAL_CATEGORY;
  const response = await fetch(`${URL}${category}`);
  const data = await response.json();
  return data.meals || data.drinks;
}
