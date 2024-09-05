import React from 'react';
import VideoPlayer from './VideoPlayer';
import AdminLoginForm from './AdminLoginForm'

const AdminLoginBody = () => {
  return (
    <div className="login-container">
      <VideoPlayer/>
      <AdminLoginForm />
    </div>
  );
};

export default AdminLoginBody;