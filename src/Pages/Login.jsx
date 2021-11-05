import React from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

function Login() {
  // const emailValidation = () => {
  //   const { email } = ;// stado <<<<<<<<<<
  //   const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //   return regex.test(String(email).toLowerCase());
  // }

  return (
    <div>
      <p>Login</p>
      <Input type="email" nome="email" dataTestid="email-input" />
      <Input type="password" nome="senha" dataTestid="password-input" />
      <Button label="Entrar" dataTestid="login-submit-btn" />
    </div>
  );
}

export default Login;
