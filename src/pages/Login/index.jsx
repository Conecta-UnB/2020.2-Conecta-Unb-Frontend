import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '../../components/Forms/Login';
import './styles.css';

function LoginPage() {
  return (
    <div className="underHeader">
      <LoginForm />
    </div>
  );
}

export default withRouter(LoginPage);
