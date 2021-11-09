const MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const MAX_INGREDIENTS = 20;

export default async function getById(id, local) {
  const URL = `${local === 'bebidas' ? DRINKS_URL : MEAL_URL}${id}`;
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
      }
    }
    result[0].ingredients = ingredients;
    return result[0];
  }
  return {};
}
