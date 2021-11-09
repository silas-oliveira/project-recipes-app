const MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export default async function getById(id, local) {
  const URL = `${local === 'bebidas' ? DRINKS_URL : MEAL_URL}${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return (data.meals || data.drinks)[0];
}
