import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import RenderFilterBtn from '../Components/RenderFilterBtn';
import RenderMultiplesShare from '../Components/RenderMultiplesShare';
import { catchDoneRecipes } from '../localStorage';

function ReceitasFeitas() {
  const [index, setIndex] = useState('');
  const doneRecipes = catchDoneRecipes();

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
      break;
    }
  };

  return (
    <div>
      <Header title="Receitas Feitas" />
      <h1>Receitas Feitas</h1>
      <RenderFilterBtn attribute="All" handleClick={ handleClick } />
      <RenderFilterBtn attribute="Food" handleClick={ handleClick } />
      <RenderFilterBtn attribute="Drinks" handleClick={ handleClick } />

      {filterRecipes && filterRecipes.map((recipe, i) => {
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
            <RenderMultiplesShare
              id={ id }
              index={ i }
              copied={ index === i }
              type={ type }
              replace="receitas-feitas"
              onClick={ () => setIndex(i) }
            />
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
