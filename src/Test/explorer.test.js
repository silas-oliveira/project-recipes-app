import React from 'react';
import './mockFetch';
import 'jest-canvas-mock';
import '@testing-library/jest-dom';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const EXPLORER_FOOD = 'explore-food';
const EXPLORER_DRINKS = 'explore-drinks';
const BY_INGREDIENTS = 'explore-by-ingredient';
const BY_AREA = 'explore-by-area';
const SURPRISE = 'explore-surprise';

const EXPLORAR_COMIDAS = '/explorar/comidas';
const EXPLORAR_BEBIDAS = '/explorar/bebidas';

describe('Explorer', () => {
  it('should render correct buttons', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar');
    expect(screen.getByTestId(EXPLORER_FOOD)).toBeInTheDocument();
    expect(screen.getByTestId(EXPLORER_DRINKS)).toBeInTheDocument();
  });

  it('should redirect to correct paths', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar');

    fireEvent.click(screen.getByTestId(EXPLORER_FOOD));
    expect(history.location.pathname).toBe(EXPLORAR_COMIDAS);

    history.push('/explorar');

    fireEvent.click(screen.getByTestId(EXPLORER_DRINKS));
    expect(history.location.pathname).toBe(EXPLORAR_BEBIDAS);
  });

  it('should render correct buttons in explorar food and drinks', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar');

    fireEvent.click(screen.getByTestId(EXPLORER_FOOD));
    expect(history.location.pathname).toBe(EXPLORAR_COMIDAS);
    expect(screen.getByTestId(BY_INGREDIENTS)).toBeInTheDocument();
    expect(screen.getByTestId(BY_AREA)).toBeInTheDocument();
    expect(screen.getByTestId(SURPRISE)).toBeInTheDocument();

    history.push('/explorar');

    fireEvent.click(screen.getByTestId(EXPLORER_DRINKS));
    expect(history.location.pathname).toBe(EXPLORAR_BEBIDAS);
    expect(screen.getByTestId(BY_INGREDIENTS)).toBeInTheDocument();
    expect(screen.getByTestId(SURPRISE)).toBeInTheDocument();
  });

  it('should redirect correctly', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(EXPLORAR_COMIDAS);

    fireEvent.click(screen.getByTestId(BY_INGREDIENTS));
    expect(history.location.pathname).toBe('/explorar/comidas/ingredientes');

    history.push(EXPLORAR_COMIDAS);
    fireEvent.click(screen.getByTestId(BY_AREA));
    expect(history.location.pathname).toBe('/explorar/comidas/area');

    history.push(EXPLORAR_COMIDAS);
    fireEvent.click(screen.getByTestId(SURPRISE));
    await waitFor(() => expect(history.location.pathname).toBe('/comidas/52771'));

    history.push(EXPLORAR_BEBIDAS);
    fireEvent.click(screen.getByTestId(BY_INGREDIENTS));
    expect(history.location.pathname).toBe('/explorar/bebidas/ingredientes');

    history.push(EXPLORAR_BEBIDAS);
    fireEvent.click(screen.getByTestId(SURPRISE));
    await waitFor(() => expect(history.location.pathname).toBe('/bebidas/178319'));
  });
});

describe('render recipe ingredients', () => {
  it('should render bebidas ingredients', () => {
    const { history } = renderWithRouter(<App />);
    history.push(EXPLORAR_BEBIDAS);
    fireEvent.click(screen.getByTestId(BY_INGREDIENTS));
    expect(history.location.pathname).toBe('/explorar/bebidas/ingredientes');
  });

  it('should redirect correctly', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(EXPLORAR_BEBIDAS);

    fireEvent.click(screen.getByTestId(SURPRISE));
    await waitFor(() => expect(history.location.pathname).toBe('/bebidas/178319'));
  });
});
