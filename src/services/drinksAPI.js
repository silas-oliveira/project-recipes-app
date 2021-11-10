const initialRequestDrinks = async () => {
  const requestDrinks = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const getDrinks = await requestDrinks.json();
  const { drinks } = getDrinks;
  return drinks;
};

export default initialRequestDrinks;
