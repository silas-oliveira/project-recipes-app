import React from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import Perfil from '../Pages/Perfil'
import renderWithRouter from './renderWithRouter';

describe('Verify profile', () => {
  it('Verify logout button.', () => {
    const { history } = renderWithRouter(<Perfil />);
    const btn = screen.getByTestId('profile-logout-btn');
    userEvent.click(btn);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  
  it('Verify if button profile done is on screen', () => {
    const { history } = renderWithRouter(<Perfil />);
    const btnDone = screen.getByTestId('profile-done-btn');
    expect(btnDone).toBeInTheDocument();
    userEvent.click(btnDone);
    const { pathname } = history.location;
    expect(pathname).toBe('/receitas-feitas');
  });

  it('Verify if favorite recipes are on screen', () => {
    const { history } = renderWithRouter(<Perfil />);
    const btnFavoritas = screen.getByTestId('profile-favorite-btn');
    expect(btnFavoritas).toBeInTheDocument();
    userEvent.click(btnFavoritas);
    const { pathname } = history.location;
    expect(pathname).toBe('/receitas-favoritas');
  });
  
  it('Verify if there is an email on localStorage', () => {
    renderWithRouter(<Perfil />);
    const userLocal = { email: 'email@email.com' };
    localStorage.setItem('user', JSON.stringify(userLocal));
    const user = localStorage.getItem('user');
    expect(user).toStrictEqual('{"email":"email@email.com"}');
  });
  
  it('Verify if email is null', () => {
    renderWithRouter(<Perfil />);
    const userLocal = { '': '' };
    localStorage.setItem('user', JSON.stringify(userLocal));
    const email = screen.getByTestId('profile-email');
    expect(email).toBeInTheDocument(false);
  });
});