import React, { useState } from 'react';

const MIN_PASSWORD_LENGTH = 6;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password); // remover dps
  };

  const isValidEmail = (emailToTest) => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(emailToTest);
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            data-testid="email-input"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="password"
            data-testid="password-input"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ !(isValidEmail(email) && password.length > MIN_PASSWORD_LENGTH) }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
