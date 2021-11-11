export function addMealsToken(token) {
  localStorage.setItem('mealsToken', token);
}

export function addCocktailsToken(token) {
  localStorage.setItem('cocktailsToken', token);
}

export function saveUser(email) {
  const user = JSON.stringify({ email });
  localStorage.setItem('user', user);
}

export function isDoneRecipe(id) {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipes) return false;
  return doneRecipes.some((recipe) => recipe.id === id);
}

export function isInProgressRecipes(id, type) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!inProgressRecipes) return false;
  if (type === 'comidas') {
    return Object.keys(inProgressRecipes.meals).some((key) => key.id === id);
  }
  return Object.keys(inProgressRecipes.cocktails).some((key) => key.id === id);
}

export function getFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return favorites;
}
