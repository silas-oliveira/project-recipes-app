import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Video from '../Components/Video';
import getById from '../services/getById';

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
    <div>
      <div>
        <img src="" alt="" data-testid="recipe-photo" />
      </div>
      <div>
        <h1 data-testid="recipe-title">Titulo</h1>
        <button type="button" data-testid="share-btn">compartilhar</button>
        <button type="button" data-testid="favorite-btn">favoritar</button>
        <p data-testid="recipe-category">texto categoria</p>
      </div>
      <div>
        <h4 data-testid={ `${'0'}-ingredient-name-and-measure` }>ingredientes</h4>
        {/* <ul>
              <li></li>
            </ul> */}
      </div>
      <div>
        <h4>Instrução</h4>
        <p data-testid="instructions"> texto de instrução </p>
      </div>
      <div>
        <h4 data-testid="video">video</h4>
        <Video url="https://www.youtube.com/watch?v=zUzd9KyIDrM" />
      </div>
      <div data-testid={ `${'0'}-recomendation-card` }>
        recomendadas
        {/* Talvez possa ser uma lista */}
      </div>
      <div>
        <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
      </div>
    </div>
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
