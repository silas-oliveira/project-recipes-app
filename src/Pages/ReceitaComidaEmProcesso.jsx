import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getById } from '../services/getById';
import RenderRecipeInProgress from '../Components/RenderRecipeInProgress';

function ReceitaComidaEmProcesso(props) {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { match: { params: { id } } } = props;
    async function getRecipe() {
      setLoading(true);
      const response = await getById(id, 'comidas');
      setRecipe(response);
      setLoading(false);
    }
    getRecipe();
  }, [props]);

  if (loading) return <div>Carregando...</div>;
  return (
    <RenderRecipeInProgress
      title={ recipe.strMeals }
      image={ recipe.strMealThumb }
      instructions={ recipe.strInstructions }
      ingredients={ recipe.ingredients }
      category={ recipe.strCategory }
    />
  );
}

ReceitaComidaEmProcesso.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ReceitaComidaEmProcesso;
