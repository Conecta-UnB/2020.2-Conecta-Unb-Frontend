import React, { useState, useContext } from 'react';
import './styles.css';
import { UserContext } from '../../../contexts/user';

export default function SignUpForm() {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  const { createUser } = useContext(UserContext);

  async function handleAdd(e) {
    e.preventDefault();
    console.log(nome, matricula, email);
    await createUser({
      nome, matricula, email, senha, telefone,
    });
  }

  return (
    <div className="containerSignUpForm">
      <form onSubmit={handleAdd}>
        <input type="text" autoComplete="off" placeholder="Nome completo" value={nome} onChange={(e) => { setNome(e.target.value); }} />
        <input type="text" autoComplete="off" placeholder="Matrícula" value={matricula} onChange={(e) => { setMatricula(e.target.value); }} />
        <input type="email" autoComplete="off" placeholder="E-mail" value={email} onChange={(e) => { setEmail(e.target.value); }} />
        <input type="password" autoComplete="off" placeholder="Senha" value={senha} onChange={(e) => { setSenha(e.target.value); }} />
        <input type="text" autoComplete="off" placeholder="Telefone" value={telefone} onChange={(e) => { setTelefone(e.target.value); }} />
        <button type="submit">
          Cadastre-se
        </button>
      </form>
    </div>
  );
}
