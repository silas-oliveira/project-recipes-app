import React from 'react';
import { screen } from '@testing-library/dom';
import NotFound from '../Pages/NotFound';
import renderWithRouter from './renderWithRouter';

describe('Verify "not found" component', () => {
  it('Verify if there is H1 with not found on it', () => {
    renderWithRouter(<NotFound />);

    const h1NotFound = screen.getByRole('heading', {
      level: 1,
    });
    expect(h1NotFound).toBeInTheDocument();
  });
});