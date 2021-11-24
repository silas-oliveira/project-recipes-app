import React from 'react';
import './mockFetch';
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const ALL_CATEGORIES = 'All-category-filter';

describe('Test render categories', () => {
  it('should render correct buttons', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');

    const all = screen.getByTestId(ALL_CATEGORIES);
    expect(all).toBeInTheDocument();

    const Beef = await screen.findByTestId('Beef-category-filter');
    expect(Beef).toBeInTheDocument();

    const Breakfast = await screen.findByTestId('Breakfast-category-filter');
    expect(Breakfast).toBeInTheDocument();

    const Chicken = await screen.findByTestId('Chicken-category-filter');
    expect(Chicken).toBeInTheDocument();

    const Dessert = await screen.findByTestId('Dessert-category-filter');
    expect(Dessert).toBeInTheDocument();

    const Goat = await screen.findByTestId('Goat-category-filter');
    expect(Goat).toBeInTheDocument();
  });

  it('should request correctly url', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');

    const Beef = await screen.findByTestId('Beef-category-filter');
    fireEvent.click(Beef);

    expect(fetch).toHaveBeenLastCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');

    const Breakfast = await screen.findByTestId('Breakfast-category-filter');
    fireEvent.click(Breakfast);

    expect(fetch).toHaveBeenLastCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast');

    const all = screen.getByTestId(ALL_CATEGORIES);
    fireEvent.click(all);

    expect(fetch).toHaveBeenLastCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=');

    history.push('/bebidas');

    const drinkCat = await screen.findByTestId('Cocktail-category-filter');
    fireEvent.click(drinkCat);

    expect(fetch).toHaveBeenLastCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');

    const all2 = screen.getByTestId(ALL_CATEGORIES);
    fireEvent.click(all2);

    expect(fetch).toHaveBeenLastCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  });
});
