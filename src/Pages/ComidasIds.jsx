import React from 'react';
import PropTypes from 'prop-types';
// import Video from '../Components/Video';

function ComidasIds(props) {
  const { index } = props;

  // const { retorno da api, strYoutube } = api ;
  // usar o retorno para renderizar as informações
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
        <h4 data-testid={ `${index}-ingredient-name-and-measure` }>ingredientes</h4>
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
        {/* <Video url={ strYoutube } /> */}
      </div>
      <div data-testid={ `${index}-recomendation-card` }>
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
  index: PropTypes.string.isRequired,
};

export default ComidasIds;
