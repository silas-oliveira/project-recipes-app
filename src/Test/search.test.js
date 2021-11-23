import React from 'react';
import './mockFetch';
import 'jest-canvas-mock';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const radioButtons = [
  'ingredient-search-radio', 'name-search-radio', 'first-letter-search-radio',
];

const renderCorrectForms = () => {
  radioButtons.forEach((radioButton) => {
    expect(screen.queryByTestId(radioButton)).not.toBeInTheDocument();
  });
  expect(screen.queryByTestId('search-input')).not.toBeInTheDocument();
  expect(screen.queryByTestId('exec-search-btn')).not.toBeInTheDocument();

  const searchInput = screen.getByTestId('search-top-btn');
  fireEvent.click(searchInput);

  radioButtons.forEach((radioButton) => {
    expect(screen.getByTestId(radioButton)).toBeInTheDocument();
  });
  expect(screen.queryByTestId('search-input')).toBeInTheDocument();
  expect(screen.queryByTestId('exec-search-btn')).toBeInTheDocument();
};

const search = (query, index, endURL) => {
  const searchInput = screen.getByTestId('search-top-btn');
  fireEvent.click(searchInput);
  fireEvent.change(screen.queryByTestId('search-input'), { target: { value: 'soup' } });
  fireEvent.click(screen.queryByTestId(radioButtons[index]));
  fireEvent.click(screen.queryByTestId('exec-search-btn'));
  expect(fetch).toHaveBeenCalledWith(`https://www.themealdb.com/api/json/v1/1/search.php?${endURL}=${query}`);
};

describe('Display correct recipe', () => {
  it('should render correct form when click', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    renderCorrectForms();
    history.push('/bebidas');
    renderCorrectForms();
  });

  it('should render correct recipe when search', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');

    search('soup', 0, 's');
  });
});
