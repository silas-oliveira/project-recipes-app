import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getById from '../services/getById';
import RenderRecipeDetails from '../Components/RenderRecipeDetails';

function ComidasIds(props) {
  const [meal, setMeal] = useState({});
  const [loading, setLoading] = useState(true);

  async function getMeal() {
    const { match: { params: { id } } } = props;
    setLoading(true);
    const response = await getById(id, 'comidas');
    console.log(response);
    setMeal(response);
    setLoading(false);
  }

  useEffect(() => {
    getMeal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <RenderRecipeDetails
      image={ meal.strMealThumb }
      title={ meal.strMeal }
      category={ meal.strCategory }
      video={ meal.strYoutube }
      instructions={ meal.strInstructions }
      ingredients={ meal.ingredients }
      recommendations={ ['1', '2', '3'] }
    />
  );
}

ComidasIds.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ComidasIds;
