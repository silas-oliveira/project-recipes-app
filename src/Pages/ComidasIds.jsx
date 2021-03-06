import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { getById, getDrinks } from '../services/requestApi';
import RenderRecipeDetails from '../Components/RenderRecipeDetails';
import Loading from '../Components/Loading';

function ComidasIds(props) {
  const [meal, setMeal] = useState({});
  const [recomendations, setRecomendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMeal() {
      const { match: { params: { id } } } = props;
      setLoading(true);
      const response = await getById(id, 'comidas');
      const recomendationsRes = await getDrinks();
      setMeal(response);
      setRecomendations(recomendationsRes);
      setLoading(false);
    }
    getMeal();
  }, [props]);

  if (loading) return <Loading />;

  return (
    <FadeIn>
      <RenderRecipeDetails
        id={ meal.idMeal }
        image={ meal.strMealThumb }
        title={ meal.strMeal }
        category={ meal.strCategory }
        video={ meal.strYoutube }
        instructions={ meal.strInstructions }
        ingredients={ meal.ingredients }
        recommendations={ recomendations }
        area={ meal.strArea }
        type="comidas"
      />
    </FadeIn>
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
