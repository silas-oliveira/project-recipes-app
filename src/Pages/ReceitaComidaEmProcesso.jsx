import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import PropTypes from 'prop-types';
import { getById } from '../services/requestApi';
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

  const tags = recipe.strTags ? recipe.strTags.split(',') : [];

  const chosenRecipe = {
    id: recipe.idMeal,
    type: 'comida',
    area: recipe.strArea || '',
    category: recipe.strCategory || '',
    alcoholicOrNot: recipe.strAlcoholic || '',
    name: recipe.strMeal,
    image: recipe.strMealThumb,
    tags: tags || [],
  };

  if (loading) return <div>Carregando...</div>;
  return (
    <FadeIn>
      <RenderRecipeInProgress
        id={ recipe.idMeal }
        title={ recipe.strMeal }
        image={ recipe.strMealThumb }
        instructions={ recipe.strInstructions }
        ingredients={ recipe.ingredients }
        category={ recipe.strCategory }
        chosenRecipe={ chosenRecipe }
        video={ recipe.strYoutube }
        type="comida"
      />
    </FadeIn>
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
