/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import logo from '../../../assets/logo.jpeg';
import './styles.css';

export default function LoginForm() {
  return (
    <div className="containerLoginForm">
      <div>
        <img src={logo} alt="logoImage" />
        <form>
          <label>
            E-mail:
          </label>
          <input type="email" autoComplete="off" />
          <label>
            Senha:
          </label>
          <input type="password" autoComplete="off" />
          <button type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
