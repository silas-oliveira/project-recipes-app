import React from 'react';
import './mockFetch';
import 'jest-canvas-mock';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Recipe-list', () => {
  it('should render 12 recipes', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    await waitFor(() => {
      return expect(screen.getByTestId('0-recipe-card')).toBeInTheDocument();
    });
  });
});
