import React from 'react';
import Header from '../../components/Header';
import SignUpForm from '../../components/Forms/SignUp';
import signUp from '../../assets/signUp.svg';
import './styles.css';

export default function SignUpPage() {
  return (
    <div>
      <Header />
      <div className="underHeader">
        <text>
          Cadastro
        </text>
        <div id="formSignUp">
          <SignUpForm />
          <img src={signUp} alt="signUpImage" />
        </div>
      </div>
    </div>
  );
}
