import React from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../firebase-config';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button 
    onClick={handleLogout} 
    className='logout-button'>
      Logout
    </button>
  );
};

export default LogoutButton;