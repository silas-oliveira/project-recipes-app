const meals = require('./mocks/meals');
const oneMeal = require('./mocks/oneMeal');
const soupMeals = require('./mocks/soupMeals');
const beefMeals = require('./mocks/beefMeals');
const breakfastMeals = require('./mocks/breakfastMeals');
const mealCategories = require('./mocks/mealCategories');
const mealIngredients = require('./mocks/mealIngredients');
const drinks = require('./mocks/drinks');
const oneDrink = require('./mocks/oneDrink');
const cocktailDrinks = require('./mocks/cocktailDrinks');
const drinkCategories = require('./mocks/drinkCategories');
const drinkIngredients = require('./mocks/drinkIngredients');
const areas = require('./mocks/areas');

function returnCorrectMockData3(url) {
  if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=') {
    return Promise.resolve(drinks);
  }

  return Promise.resolve(meals);
}

function returnCorrectMockData2(url) {
  if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef') {
    return Promise.resolve(beefMeals);
  }

  if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast') {
    return Promise.resolve(breakfastMeals);
  }

  if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail') {
    return Promise.resolve(cocktailDrinks);
  }

  return returnCorrectMockData3(url);
}

function returnCorrectMockData1(url) {
  if (
    url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
    || url === 'https://www.themealdb.com/api/json/v1/1/random.php'
    || url === 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771'
  ) {
    return Promise.resolve(oneMeal);
  }

  if (
    url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Aquamarine'
    || url === 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    || url === 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319'
  ) {
    return Promise.resolve(oneDrink);
  }

  if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=soup') {
    return Promise.resolve(soupMeals);
  }

  return returnCorrectMockData2(url);
}

function returnCorrectMockData(url) {
  if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?c=list') {
    return Promise.resolve(mealCategories);
  }

  if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list') {
    return Promise.resolve(drinkCategories);
  }

  if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?i=list') {
    return Promise.resolve(mealIngredients);
  }

  if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list') {
    return Promise.resolve(drinkIngredients);
  }

  if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?a=list') {
    return Promise.resolve(areas);
  }

  return returnCorrectMockData1(url);
}

global.fetch = jest.fn((url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => returnCorrectMockData(url),
}));
