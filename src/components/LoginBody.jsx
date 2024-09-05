import React from 'react';
import VideoPlayer from './VideoPlayer';
import LoginForm from './LoginForm'

const LoginBody = () => {
  return (
    <div className="login-container">
      <VideoPlayer/>
      <LoginForm />
    </div>
  );
};

export default LoginBody;