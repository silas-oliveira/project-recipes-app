import React from 'react';
import './mockFetch';
import 'jest-canvas-mock';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import mealsMock from './mocks/meals';
import drinksMock from './mocks/drinks';

const MAX_RECIPES = 4;

describe('Recipe-list meals', () => {
  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
  });

  it('should render 4 recipes', async () => {
    expect((await screen.findAllByTestId(/-recipe-card/)).length).toBe(MAX_RECIPES);
    expect((await screen.findAllByTestId(/-card-img/)).length).toBe(MAX_RECIPES);
    expect((await screen.findAllByTestId(/-card-name/)).length).toBe(MAX_RECIPES);
  });

  it('should render the first 4 recipes', async () => {
    const recipesNames = await screen.findAllByTestId(/-card-name/);
    const recipesIMG = await screen.findAllByTestId(/-card-img/);
    recipesNames.forEach((recipe, index) => {
      expect(recipe.innerHTML).toBe(mealsMock.meals[index].strMeal);
    });
    recipesIMG.forEach((recipe, index) => {
      expect(recipe.src).toBe(mealsMock.meals[index].strMealThumb);
    });
  });
});

describe('Recipe-list drinks', () => {
  it('should render 4 recipes', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/bebidas');
    expect((await screen.findAllByTestId(/-recipe-card/)).length).toBe(MAX_RECIPES);
    expect((await screen.findAllByTestId(/-card-img/)).length).toBe(MAX_RECIPES);
    expect((await screen.findAllByTestId(/-card-name/)).length).toBe(MAX_RECIPES);
  });

  it('should render the first 4 recipes', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/bebidas');
    const recipesNames = await screen.findAllByTestId(/-card-name/);
    const recipesIMG = await screen.findAllByTestId(/-card-img/);
    recipesNames.forEach((recipe, index) => {
      expect(recipe.innerHTML).toBe(drinksMock.drinks[index].strDrink);
    });
    recipesIMG.forEach((recipe, index) => {
      expect(recipe.src).toBe(drinksMock.drinks[index].strDrinkThumb);
    });
  });
});
