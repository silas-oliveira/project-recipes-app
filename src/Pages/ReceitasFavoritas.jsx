import React, { useEffect, useState } from 'react';
import { getFavorites } from '../localStorage';
import Header from '../Components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function ReceitasFavoritas() {
  const [favites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <h1>Explorar ids</h1>
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drink</button>
      <div>
        { favites.map((favorite, index) => (
          <div key={ index }>
            <img
              src={ favorite.image }
              alt={ favorite.name }
              data-testid={ `${index}-horizontal-image` }
            />
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { `${favorite.area} - ${favorite.category}`}
            </p>
            <p data-testid={ `${index}-horizontal-name` }>{ favorite.name }</p>
            <div>
              <button
                type="button"
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
              >
                <img src={ shareIcon } alt="Compartilhar" />
              </button>
              <button
                type="button"
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ blackHeartIcon }
              >
                <img src={ blackHeartIcon } alt="Favorite" />
              </button>
            </div>
          </div>
        )) }
      </div>
    </div>
  );
}

export default ReceitasFavoritas;
