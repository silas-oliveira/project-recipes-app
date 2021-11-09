import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getById, getRecomendations } from '../services/getById';
import RenderRecipeDetails from '../Components/RenderRecipeDetails';

function BebidasIds(props) {
  const [drink, setDrink] = useState({});
  const [recomendations, setRecomendations] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getDrink() {
    const { match: { params: { id } } } = props;
    setLoading(true);
    const response = await getById(id, 'bebidas');
    const responseRec = await getRecomendations('comidas');
    setRecomendations(responseRec);
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
      id={ drink.idDrink }
      image={ drink.strDrinkThumb }
      title={ drink.strDrink }
      category={ drink.strAlcoholic || drink.strCategory }
      ingredients={ drink.ingredients }
      instructions={ drink.strInstructions }
      recommendations={ recomendations }
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
