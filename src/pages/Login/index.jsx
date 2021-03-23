import React from 'react';
import Header from '../../components/Header';
import LoginForm from '../../components/Forms/Login';
import './styles.css';

export default function LoginPage() {
  return (
    <div>
      <Header />
      <div className="underHeader">
        <LoginForm />
      </div>
    </div>
  );
}
