import React from 'react';
import './mockFetch';
import 'jest-canvas-mock';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const SEARCH_INPUT = 'search-input';
const BUTTON = 'exec-search-btn';

const radioButtons = [
  'ingredient-search-radio', 'name-search-radio', 'first-letter-search-radio',
];

const renderCorrectForms = () => {
  radioButtons.forEach((radioButton) => {
    expect(screen.queryByTestId(radioButton)).not.toBeInTheDocument();
  });
  expect(screen.queryByTestId(SEARCH_INPUT)).not.toBeInTheDocument();
  expect(screen.queryByTestId(BUTTON)).not.toBeInTheDocument();

  const searchInput = screen.getByTestId('search-top-btn');
  fireEvent.click(searchInput);

  radioButtons.forEach((radioButton) => {
    expect(screen.getByTestId(radioButton)).toBeInTheDocument();
  });
  expect(screen.queryByTestId(SEARCH_INPUT)).toBeInTheDocument();
  expect(screen.queryByTestId(BUTTON)).toBeInTheDocument();
};

const search = (query, index, endURL, type) => {
  const searchInput = screen.getByTestId('search-top-btn');
  const url = type === 'comida' ? 'https://www.themealdb.com' : 'https://www.thecocktaildb.com';
  fireEvent.click(searchInput);
  fireEvent.change(screen.queryByTestId(SEARCH_INPUT), { target: { value: query } });
  fireEvent.click(screen.queryByTestId(radioButtons[index]));
  fireEvent.click(screen.queryByTestId(BUTTON));
  expect(fetch)
    .toHaveBeenLastCalledWith(
      `${url}/api/json/v1/1/${index === 0 ? 'filter' : 'search'}.php?${endURL}=${query}`,
    );
};

describe('Search correct', () => {
  it('should render correct form when click', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    renderCorrectForms();
    history.push('/bebidas');
    renderCorrectForms();
  });

  it('should render correct recipe when search for name', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    search('soup', 1, 's', 'comida');
    history.push('/bebidas');
    search('ola', 1, 's', 'bebida');
  });

  it('should render correct recipe when search for ingredient', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    search('chicken', 0, 'i', 'comida');
    history.push('/bebidas');
    search('ola', 0, 'i', 'bebida');
  });

  it('should render correct recipe when search for first letter', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    search('a', 2, 'f', 'comida');
    history.push('/bebidas');
    search('a', 2, 'f', 'bebida');
  });
});
