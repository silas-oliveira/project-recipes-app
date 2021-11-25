import React from 'react';
import './mockFetch';
import 'jest-canvas-mock';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const RECIPE_INGREDIENTS_FOOD = 8;
const RECIPE_INGREDIENTS_DRINKS = 3;

describe('in Progress recipe', () => {
  it('should render correct things and work properly food', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas/52771');

    const startButton = await screen.findByTestId('start-recipe-btn');
    fireEvent.click(startButton);

    expect(history.location.pathname).toBe('/comidas/52771/in-progress');

    const recipeTitle = await screen.findByTestId('recipe-title');
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle).toHaveTextContent('Spicy Arrabiata Penne');

    const finishButton = await screen.findByTestId('finish-recipe-btn');

    expect(finishButton).toBeDisabled();

    for (let i = 0; i < RECIPE_INGREDIENTS_FOOD; i += 1) {
      const ingredient = screen.getByTestId(`${i}-ingredient-step`);
      fireEvent.click(ingredient);
    }

    expect(finishButton).toBeEnabled();

    fireEvent.click(finishButton);

    expect(history.location.pathname).toBe('/receitas-feitas');
  });

  it('should render correct things and work properly drink', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/bebidas/178319');

    const startButton = await screen.findByTestId('start-recipe-btn');
    fireEvent.click(startButton);

    expect(history.location.pathname).toBe('/bebidas/178319/in-progress');

    const recipeTitle = await screen.findByTestId('recipe-title');
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle).toHaveTextContent('Aquamarine');

    const finishButton = await screen.findByTestId('finish-recipe-btn');

    expect(finishButton).toBeDisabled();

    for (let i = 0; i < RECIPE_INGREDIENTS_DRINKS; i += 1) {
      const ingredient = screen.getByTestId(`${i}-ingredient-step`);
      fireEvent.click(ingredient);
    }

    expect(finishButton).toBeEnabled();

    fireEvent.click(finishButton);

    expect(history.location.pathname).toBe('/receitas-feitas');
  });
});
