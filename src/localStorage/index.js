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

export function getUser() {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return { email: 'default-email@email.com' };
}

export function exitUser() {
  localStorage.removeItem('user');
  localStorage.removeItem('mealsToken');
  localStorage.removeItem('cocktailsToken');
  localStorage.removeItem('doneRecipes');
  localStorage.removeItem('favoriteRecipes');
  localStorage.removeItem('inProgressRecipes');
}

export function doneRecipe(recipe) {
  const actualDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (actualDoneRecipes) {
    const newDoneRecipes = actualDoneRecipes
      .filter((curRecipe) => curRecipe.id !== recipe.id);
    localStorage.setItem('doneRecipes', JSON.stringify([...newDoneRecipes, recipe]));
  } else {
    localStorage.setItem('doneRecipes', JSON.stringify([recipe]));
  }
}

export function catchDoneRecipes() {
  return JSON.parse(localStorage.getItem('doneRecipes'));
}

export function isDoneRecipe(id) {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipes) return false;
  return doneRecipes.some((recipe) => recipe.id === id);
}

export function setInProgressRecipe(id, array, type) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const local = type === 'bebida' ? 'cocktails' : 'meals';
  if (!inProgressRecipes) {
    const newInProgressRecipes = {
      cocktails: {},
      meals: {},
    };
    newInProgressRecipes[local][id] = array;
    localStorage.setItem('inProgressRecipes', JSON.stringify(newInProgressRecipes));
  } else {
    inProgressRecipes[local][id] = array;
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }
}

export function removeRecipeInProgress(id, type) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!inProgressRecipes) return false;
  if (type === 'comida') {
    delete inProgressRecipes.meals[id];
  } else {
    delete inProgressRecipes.cocktails[id];
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
}

export function isInProgressRecipes(id, type) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!inProgressRecipes) return false;
  if (type === 'comidas') {
    return Object.keys(inProgressRecipes.meals).some((key) => key === id);
  }
  return Object.keys(inProgressRecipes.cocktails).some((key) => key === id);
}

export function getRecipeInProgress(id, type) {
  const inProgessRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const local = type === 'bebida' ? 'cocktails' : 'meals';
  if (inProgessRecipe) return inProgessRecipe[local][id] || [];
  return [];
}

export function isFavoriteRecipe(id) {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  return (favorites.some((favorite) => (favorite.id).includes(id)));
}

export function getFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return favorites || [];
}

export function updateFavorite(fav) {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  if (favorites.some((cur) => cur.id === fav.id)) {
    const newFav = favorites.filter((cur) => cur.id !== fav.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFav));
  } else {
    favorites.push(fav);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }
}
