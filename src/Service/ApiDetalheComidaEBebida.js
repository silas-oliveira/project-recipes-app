export const APIComidaIds = async (id) => {
  const endpoint = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = await endpoint.json();
  return response;
};

export const APIBebidasIds = async (id) => {
  const endpoint = fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = await endpoint.json();
  return response;
};
