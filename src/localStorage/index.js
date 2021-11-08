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
