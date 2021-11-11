import React from 'react';
import Header from '../Components/Header';
import RenderFilterBtn from '../Components/RenderFilterBtn';
import shareIcon from '../images/shareIcon.svg';

function ReceitasFeitas() {
  const doneRecipes = [
    {
      id: '52771',
      type: 'comida',
      area: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'bebida',
      area: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ];

  return (
    <div>
      <Header title="Receitas Feitas" />
      <h1>Explorar ids</h1>
      <RenderFilterBtn attribute="All" />
      <RenderFilterBtn attribute="Food" />
      <RenderFilterBtn attribute="Drinks" />

      {doneRecipes.map((recipe, i) => {
        const { id, image, name, category, doneDate,
          tags, area, type, alcoholicOrNot } = recipe;
        return (
          <div key={ id }>
            <img src={ image } alt={ name } data-testid={ `${i}-horizontal-image` } />
            <h3 data-testid={ `${i}-horizontal-top-text` }>
              { type === 'comida' ? `${area} - ${category}` : alcoholicOrNot }
            </h3>
            <h3 data-testid={ `${i}-horizontal-name` }>{name}</h3>
            <p data-testid={ `${i}-horizontal-done-date` }>{`Feita em: ${doneDate}`}</p>
            <button type="button">
              <img
                src={ shareIcon }
                data-testid={ `${i}-horizontal-share-btn` }
                alt="share"
              />
            </button>
            {tags.map((tag, idx) => (
              <p
                key={ idx }
                data-testid={ `${i}-${tag}-horizontal-tag` }
              >
                {tag}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default ReceitasFeitas;
