import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { addCocktailsToken, addMealsToken, saveUser } from '../localStorage';
import '../CSS/login.css';

const MIN_PASSWORD_LENGTH = 6;

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMealsToken(1);
    addCocktailsToken(1);
    saveUser(email);
    history.push('/comidas');
  };

  const isValidEmail = (emailToTest) => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(emailToTest);
  };

  return (
    <div className="form-signin d-flex align-items-center">
      <div className="border border-light rounded-3 shadow p-4">
        <p>Login</p>
        <form onSubmit={ handleSubmit }>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="email-input"
              className="width-login-form"
            >
              Email
            </InputGroup.Text>
            <FormControl
              type="email"
              aria-label="Email"
              aria-describedby="email-input"
              name="email"
              id="email"
              data-testid="email-input"
              onChange={ (e) => setEmail(e.target.value) }
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="password-input"
              className="width-login-form"
            >
              Senha
            </InputGroup.Text>
            <FormControl
              type="password"
              aria-label="Password"
              aria-describedby="password-input"
              name="password"
              id="password"
              data-testid="password-input"
              onChange={ (e) => setPassword(e.target.value) }
            />
          </InputGroup>
          <Button
            type="submit"
            data-testid="login-submit-btn"
            disabled={ !(isValidEmail(email) && password.length > MIN_PASSWORD_LENGTH) }
            className="btn-all-width"
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
