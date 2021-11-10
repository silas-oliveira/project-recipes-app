import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getById } from '../services/getById';
import RenderRecipeInProgress from '../Components/RenderRecipeInProgress';

function ReceitaBebidaEmProcesso(props) {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { match: { params: { id } } } = props;
    async function getRecipe() {
      setLoading(true);
      const response = await getById(id, 'bebidas');
      setRecipe(response);
      setLoading(false);
    }
    getRecipe();
  }, [props]);

  if (loading) return <div>Carregando...</div>;
  return (
    <RenderRecipeInProgress
      title={ recipe.strDrink }
      image={ recipe.strDrinkThumb }
      instructions={ recipe.strInstructions }
      ingredients={ recipe.ingredients }
      category={ recipe.strAlcoholic || recipe.strCategory }
    />
  );
}

ReceitaBebidaEmProcesso.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ReceitaBebidaEmProcesso;
