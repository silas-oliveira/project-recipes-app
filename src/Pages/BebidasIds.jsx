import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { getById, getMeals } from '../services/requestApi';
import RenderRecipeDetails from '../Components/RenderRecipeDetails';
import Loading from '../Components/Loading';

function BebidasIds(props) {
  const [drink, setDrink] = useState({});
  const [recomendations, setRecomendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDrink() {
      const { match: { params: { id } } } = props;
      setLoading(true);
      const response = await getById(id, 'bebidas');
      const responseRec = await getMeals();
      setRecomendations(responseRec);
      setDrink(response);
      setLoading(false);
    }
    getDrink();
  }, [props]);

  if (loading) return <Loading />;
  return (
    <FadeIn>
      <RenderRecipeDetails
        id={ drink.idDrink }
        image={ drink.strDrinkThumb }
        title={ drink.strDrink }
        category={ drink.strCategory }
        alcoholic={ drink.strAlcoholic }
        ingredients={ drink.ingredients }
        instructions={ drink.strInstructions }
        recommendations={ recomendations }
        type="bebidas"
      />
    </FadeIn>
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
