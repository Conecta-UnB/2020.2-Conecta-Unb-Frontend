import React from 'react';
import SignUpForm from '../../components/Forms/SignUp';
import signUp from '../../assets/signUp.svg';
import './styles.css';

export default function SignUpPage() {
  return (
    <div>
      <div className="underHeader">
        <h1>
          Cadastro
        </h1>
        <div id="formSignUp">
          <SignUpForm />
          <img src={signUp} alt="signUpImage" />
        </div>
      </div>
    </div>
  );
}
