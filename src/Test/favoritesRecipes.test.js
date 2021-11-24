import React from 'react';
import './mockFetch';
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const image1 = '0-horizontal-image';
const image2 = '0-horizontal-image';

describe('Favorite Recipes page', () => {
  const favoriteRecipes = [
    {
      id: '52771',
      type: 'comida',
      area: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    },
    {
      id: '178319',
      type: 'bebida',
      area: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    },
  ];

  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    history.push('/receitas-favoritas');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it(`Should have recipe image, name, category, area, favorite button
    , and a share button if the recipe is a food`, async () => {
    const foodImage = await screen.findByTestId(image1);
    const foodName = await screen.findByTestId('0-horizontal-name');
    const foodInfo = await screen.findByTestId('0-horizontal-top-text');
    const shareButton = await screen.findByTestId('0-horizontal-share-btn');
    const favoriteButton = await screen.findByTestId('0-horizontal-favorite-btn');

    expect(foodImage).toBeInTheDocument();
    expect(foodName).toBeInTheDocument();
    expect(foodInfo.innerHTML)
      .toBe(`${favoriteRecipes[0].area} - ${favoriteRecipes[0].category}`);
    expect(shareButton).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
  });

  it(`Should have recipe image, name, if is alcoholic or not, favorite button
    , and a share button if the recipe is a drink`, async () => {
    const drinkImage = await screen.findByTestId(image2);
    const drinkName = await screen.findByTestId('1-horizontal-name');
    const drinkInfo = await screen.findByTestId('1-horizontal-top-text');
    const shareButton = await screen.findByTestId('1-horizontal-share-btn');
    const favoriteButton = await screen.findByTestId('1-horizontal-favorite-btn');

    expect(drinkImage).toBeInTheDocument();
    expect(drinkName).toBeInTheDocument();
    expect(drinkInfo.innerHTML)
      .toContain(favoriteRecipes[1].alcoholicOrNot);
    expect(shareButton).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
  });

  it('Should show only food when the "Food" filter button is clicked', async () => {
    const foodFilterBtn = await screen.findByTestId('filter-by-food-btn');
    const foodImage = await screen.queryByAltText(favoriteRecipes[0].name);
    const drinkImage = await screen.queryByAltText(favoriteRecipes[1].name);

    expect(foodImage).toBeInTheDocument();
    expect(drinkImage).toBeInTheDocument();

    fireEvent.click(foodFilterBtn);

    expect(foodImage).toBeInTheDocument();
    expect(drinkImage).not.toBeInTheDocument();
  });

  it('Should show only drinks when "Drink" filter button is clicked', async () => {
    const drinkFilterBtn = await screen.findByTestId('filter-by-drink-btn');
    const foodImage = await screen.queryByAltText(favoriteRecipes[0].name);
    const drinkImage = await screen.queryByAltText(favoriteRecipes[1].name);
    const firstElement = await screen.findByTestId(image1);

    expect(foodImage).toBeInTheDocument();
    expect(drinkImage).toBeInTheDocument();

    expect(firstElement.alt).toBe(favoriteRecipes[0].name);

    fireEvent.click(drinkFilterBtn);

    const newFirstElement = await screen.findByTestId(image1);

    // expect(foodImage).not.toBeInTheDocument();
    expect(drinkImage).toBeInTheDocument();

    expect(newFirstElement.alt).toBe(favoriteRecipes[1].name);
  });
});
