import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import RenderFilterBtn from '../Components/RenderFilterBtn';
import shareIcon from '../images/shareIcon.svg';

function ReceitasFeitas() {
  const [copied, setCopied] = useState(false);
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

  const [filterRecipes, setFilterRecipes] = useState(doneRecipes);

  const handleClick = (type) => {
    const foodRecipes = doneRecipes.filter((recipe) => recipe.type === 'comida');
    const drinkRecipes = doneRecipes.filter((recipe) => recipe.type === 'bebida');
    switch (type) {
    case 'Food':
      setFilterRecipes(foodRecipes);
      break;
    case 'Drinks':
      setFilterRecipes(drinkRecipes);
      break;
    case 'All':
      setFilterRecipes(doneRecipes);
      break;
    default:
      setCopied(doneRecipes);
      break;
    }
  };

  const shareLink = (id, type) => {
    const standartLink = 'http://localhost:3000/';
    const generalType = `${type}s`;
    copy(`${standartLink}${generalType}/${id}`);
    setCopied(true);
  };

  return (
    <div>
      <Header title="Receitas Feitas" />
      <h1>Receitas Feitas</h1>
      <RenderFilterBtn attribute="All" handleClick={ handleClick } />
      <RenderFilterBtn attribute="Food" handleClick={ handleClick } />
      <RenderFilterBtn attribute="Drinks" handleClick={ handleClick } />

      {filterRecipes.map((recipe, i) => {
        const { id, image, name, category, doneDate,
          tags, area, type, alcoholicOrNot } = recipe;
        return (
          <div key={ id }>
            <Link to={ `${type}s/${id}` }>
              <img
                width="300px"
                src={ image }
                alt={ name }
                data-testid={ `${i}-horizontal-image` }
              />
            </Link>
            <h3 data-testid={ `${i}-horizontal-top-text` }>
              { type === 'comida' ? `${area} - ${category}` : alcoholicOrNot }
            </h3>
            <Link to={ `${type}s/${id}` }>
              <h3 data-testid={ `${i}-horizontal-name` }>{name}</h3>
            </Link>
            <p data-testid={ `${i}-horizontal-done-date` }>{`Feita em: ${doneDate}`}</p>
            <button type="button" onClick={ () => shareLink(id, type) }>
              <img
                src={ shareIcon }
                data-testid={ `${i}-horizontal-share-btn` }
                alt="share"
              />
              {copied && 'Link copiado!'}
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
