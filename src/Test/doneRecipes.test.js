import React from 'react';
import './mockFetch';
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const image1 = '0-horizontal-image';

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
    const foodImage = await screen.findByTestId(image1);
    const foodName = await screen.findByTestId('0-horizontal-name');
    const foodInfo = await screen.findByTestId('0-horizontal-top-text');
    const foodDoneDate = await screen.findByTestId('0-horizontal-done-date');
    const foodFirstTag = await screen.findByTestId('0-Pasta-horizontal-tag');
    const shareButton = await screen.findByTestId('0-horizontal-share-btn');

    expect(foodImage).toBeInTheDocument();
    expect(foodName).toBeInTheDocument();
    expect(foodInfo.innerHTML)
      .toBe(`${doneRecipes[0].area} - ${doneRecipes[0].category}`);
    expect(foodDoneDate).toBeInTheDocument();
    expect(foodFirstTag.innerHTML).toBe(doneRecipes[0].tags[0]);
    expect(shareButton).toBeInTheDocument();
  });

  it('Should show only food when the "Food" filter button is clicked', async () => {
    const foodFilterBtn = await screen.findByTestId('filter-by-food-btn');
    const foodImage = await screen.queryByAltText(doneRecipes[0].name);
    const drinkImage = await screen.queryByAltText(doneRecipes[1].name);

    expect(foodImage).toBeInTheDocument();
    expect(drinkImage).toBeInTheDocument();

    fireEvent.click(foodFilterBtn);

    expect(foodImage).toBeInTheDocument();
    expect(drinkImage).not.toBeInTheDocument();
  });

  it('Should show only drinks when "Drink" filter button is clicked', async () => {
    const drinkFilterBtn = await screen.findByTestId('filter-by-drink-btn');
    const foodImage = await screen.queryByAltText(doneRecipes[0].name);
    const drinkImage = await screen.queryByAltText(doneRecipes[1].name);
    const firstElement = await screen.findByTestId(image1);

    expect(foodImage).toBeInTheDocument();
    expect(drinkImage).toBeInTheDocument();

    expect(firstElement.alt).toBe(doneRecipes[0].name);

    fireEvent.click(drinkFilterBtn);

    const newFirstElement = await screen.findByTestId(image1);

    expect(foodImage).not.toBeInTheDocument();
    expect(drinkImage).toBeInTheDocument();

    expect(newFirstElement.alt).toBe(doneRecipes[1].name);
  });
});
