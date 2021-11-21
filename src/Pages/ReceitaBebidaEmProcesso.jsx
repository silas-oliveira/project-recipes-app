import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import PropTypes from 'prop-types';
import { getById } from '../services/requestApi';
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

  const tags = recipe.strTags ? recipe.strTags.split(',') : [];

  const chosenRecipe = {
    id: recipe.idDrink,
    type: 'bebida',
    area: recipe.strArea || '',
    category: recipe.strCategory || '',
    alcoholicOrNot: recipe.strAlcoholic || '',
    name: recipe.strDrink,
    image: recipe.strDrinkThumb,
    tags: tags || [],
  };

  if (loading) return <div>Carregando...</div>;
  return (
    <FadeIn>
      <RenderRecipeInProgress
        id={ recipe.idDrink }
        title={ recipe.strDrink }
        image={ recipe.strDrinkThumb }
        instructions={ recipe.strInstructions }
        ingredients={ recipe.ingredients }
        category={ recipe.strAlcoholic || recipe.strCategory }
        chosenRecipe={ chosenRecipe }
        alcoholic={ recipe.strAlcoholic }
        type="bebida"
      />
    </FadeIn>
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
