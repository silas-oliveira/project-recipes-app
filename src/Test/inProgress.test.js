import React from 'react';
import './mockFetch';
import 'jest-canvas-mock';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const RECIPE_INGREDIENTS = 8;

describe('in Progress recipe', () => {
  it('should render correct things and work properly', async () => {
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

    for (let i = 0; i < RECIPE_INGREDIENTS; i += 1) {
      const ingredient = screen.getByTestId(`${i}-ingredient-step`);
      fireEvent.click(ingredient);
    }

    expect(finishButton).toBeEnabled();

    fireEvent.click(finishButton);

    expect(history.location.pathname).toBe('/receitas-feitas');

    history.push('/comidas/178319');

    fireEvent.click(startButton);

    expect(history.location.pathname).toBe('/comidas/52771/in-progress');

    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle).toHaveTextContent('Aquamarine');

    expect(finishButton).toBeDisabled();

    for (let i = 0; i < RECIPE_INGREDIENTS; i += 1) {
      const ingredient = screen.getByTestId(`${i}-ingredient-step`);
      fireEvent.click(ingredient);
    }

    expect(finishButton).toBeEnabled();

    fireEvent.click(finishButton);

    expect(history.location.pathname).toBe('/receitas-feitas');
  });
});
