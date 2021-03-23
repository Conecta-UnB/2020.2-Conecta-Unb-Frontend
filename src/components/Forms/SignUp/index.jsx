import React from 'react';
import './styles.css';

export default function SignUpForm() {
  return (
    <div className="containerSignUpForm">
      <form>
        <input type="text" autoComplete="off" placeholder="Nome completo" />
        <input type="text" autoComplete="off" placeholder="Matrícula" />
        <input type="email" autoComplete="off" placeholder="E-mail" />
        <input type="password" autoComplete="off" placeholder="Senha" />
        <input type="text" autoComplete="off" placeholder="Telefone" />
        <button type="submit">
          Cadastre-se
        </button>
      </form>
    </div>
  );
}
