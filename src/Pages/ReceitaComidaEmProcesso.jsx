import React from 'react';
import Input from '../Components/Input';

function ReceitaComidaEmProcesso(props) {
  const { match: { params: { id } } } = props;

  return (
    <div>
      <div>
        <img src="" alt="" data-testid="recipe-photo" />
        <div>
          <h2 data-testid="recipe-title">Titulo</h2>
          <button type="button" data-testid="share-btn">Compartilhar</button>
          <button type="button" data-testid="favorite-btn">Favoritar</button>
        </div>
        <div>
          <p data-testid="recipe-category">texto categoria</p>
          <p data-testid={ `${index}-ingredient-step` }>ingredientes</p>
          {
            ingredientes
              .map((item) => (<Input key={ item } type="checkbox" />))
          }
        </div>
        <div>
          <p data-testid="instructions">Intrução</p>
        </div>
        <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
      </div>
    </div>
  );
}

export default ReceitaComidaEmProcesso;
