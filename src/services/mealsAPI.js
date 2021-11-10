const initialRequest = async () => {
  const requestMeals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const getMeals = await requestMeals.json();
  const { meals } = getMeals;
  return meals;
};

export default initialRequest;
