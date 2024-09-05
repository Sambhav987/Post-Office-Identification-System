import React from 'react';
import VideoPlayer from './VideoPlayer';
import RegisterForm from './RegisterForm'

const RegisterBody = () => {
  return (
    <div className="login-container">
      <VideoPlayer/>
      <RegisterForm />
    </div>
  );
};

export default RegisterBody;