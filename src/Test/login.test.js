import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Login from '../Pages/Login';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const LOGIN_SUBMIT_BTN = 'login-submit-btn';
const OK_EMAIL = 'email@grupo5.com';
const OK_PASSWORD = '1234567';

describe('1 - Test login page', () => {
  test('Verify if its the right path', () => {
    const { history } = renderWithRouter(<Login />);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Verify the components on screen', () => {
    const { getByTestId } = renderWithRouter(<Login />);

    const emailInput = getByTestId(EMAIL_INPUT);
    expect(emailInput).toBeInTheDocument();
    const passInput = getByTestId(PASSWORD_INPUT);
    expect(passInput).toBeInTheDocument();
    const submitInput = getByTestId(LOGIN_SUBMIT_BTN);
    expect(submitInput).toBeInTheDocument();
    expect(submitInput).toHaveTextContent('Entrar');
  });

  test('Verify if funcionalities are on screen + redirect', () => {
    const { getByTestId, history } = renderWithRouter(<Login />);

    const { pathname } = history.location;
    const submitInput = getByTestId(LOGIN_SUBMIT_BTN);
    expect(submitInput.disabled).toBe(true);
    if (submitInput.disabled === false) {
      userEvent.click(submitInput);
      expect(pathname).toBe('/comidas');
    }
  });

  test('Verify password and email input', () => {
    const { getByTestId } = renderWithRouter(<Login />);

    const submitInput = getByTestId(LOGIN_SUBMIT_BTN);
    expect(submitInput.disabled).toBe(true);
    const passInput = getByTestId(PASSWORD_INPUT);
    userEvent.type(passInput, '12345678');
    const emailInput = getByTestId(EMAIL_INPUT);
    userEvent.type(emailInput, OK_EMAIL);
    expect(submitInput.disabled).toBe(false);
  });

  test('Verify localStorage', () => {
    renderWithRouter(<Login />);

    const userStorage = JSON.parse(localStorage.getItem('user'));
    expect(userStorage).toBe(null);
    const cocktailStorage = JSON.parse(localStorage.getItem('cocktailsToken'));
    expect(cocktailStorage).toBe(null);
    const mealsStorage = JSON.parse(localStorage.getItem('mealsToken'));
    expect(mealsStorage).toBe(null);
    const favoriteRecipesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    expect(favoriteRecipesStorage).toBe(null);
    const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    expect(doneRecipesStorage).toBe(null);
    const inProgressStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    expect(inProgressStorage).toBe(null);
  });
});

describe('2 - Verify if people can write down his password on input', () => {
  it('Its possible to write password', () => {
    const { getByTestId } = renderWithRouter(<Login />);

    fireEvent.change(getByTestId(PASSWORD_INPUT), { target: { value: OK_PASSWORD } });

    expect(getByTestId(PASSWORD_INPUT)).toHaveValue(OK_PASSWORD);
  });
});

describe('3 - Verify if its possible to put email on input', () => {
  it('Its possible to write email', () => {
    const { getByTestId } = renderWithRouter(<Login />);

    fireEvent.change(getByTestId(EMAIL_INPUT), { target: { value: OK_EMAIL } });

    expect(getByTestId(EMAIL_INPUT)).toHaveValue(OK_EMAIL);
  });
});

describe('4 - Verify if saves email on localStorage', () => {
  it('Verify if it saves on localStorage after submit', () => {
    const { getByTestId } = renderWithRouter(<Login />);

    fireEvent.change(getByTestId(EMAIL_INPUT), { target: { value: OK_EMAIL } });

    fireEvent.change(getByTestId(PASSWORD_INPUT), { target: { value: OK_PASSWORD } });

    fireEvent.click(getByTestId(LOGIN_SUBMIT_BTN));

    const userStorage = JSON.parse(localStorage.getItem('user'));

    expect(userStorage).toEqual({ email: OK_EMAIL });
  });
});
