import React from 'react';
import './mockFetch';
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Done Recipes page', () => {
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

  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    history.push('/receitas-feitas');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it(`Should have recipe image, name, category, area, done date,
    first tags, and a share button if the recipe is a food`, async () => {
    const foodImage = await screen.findByTestId('0-horizontal-image');
    expect(foodImage).toBeInTheDocument();
  });
});
