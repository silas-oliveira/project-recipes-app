import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getById from '../services/getById';
import RenderRecipeDetails from '../Components/RenderRecipeDetails';

function BebidasIds(props) {
  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(true);

  async function getDrink() {
    const { match: { params: { id } } } = props;
    setLoading(true);
    const response = await getById(id, 'bebidas');
    console.log(response);
    setDrink(response);
    setLoading(false);
  }

  useEffect(() => {
    getDrink();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <RenderRecipeDetails
      image={ drink.strDrinkThumb }
      title={ drink.strDrink }
      category={ drink.strCategory }
      ingredients={ drink.ingredients }
      instructions={ drink.strInstructions }
      recommendations={ ['1', '2', '3'] }
    />
  );
}

BebidasIds.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default BebidasIds;
