import React, { useState } from 'react';
import firebase from '../firebase-config';
import { useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {
  const [email, setEmail] = useState('');   
    const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully!');
      notifySuccess();
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      switch (error.code) {
        case 'auth/invalid-email':
          notifyError('Invalid email address.');
          break;
        case 'auth/user-disabled':
          notifyError('User account has been disabled.');
          break;
        case 'auth/user-not-found':
          notifyError('No user found with this email.');
          break;
        case 'auth/wrong-password':
          notifyError('Incorrect password.');
          break;
        default:
          notifyError('Login failed. Please try again.');
      }
    }
  };
  
  const notifySuccess = () => toast.success('Login successful!');
  const notifyError = () => toast.error('Login failed');

  return (
    <div className="form-container">
      <h2 className='login-form-h2'>
        Log in to <span className="mail-potato">Mail Potato</span>
      </h2>
      <div className="form-wrapper">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            spellCheck="false"
            className="form-input"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onInput={(e) => (e.target.value = e.target.value.toLowerCase())}
          
          />

          <input
            type="password"
            spellCheck="false"
            className="form-input"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit" className="form-submit">
            Log in
          </button>
          
          <p className="registerlogin-link-container">
          New users{' '}
          <Link to="/register" 
          className="registerlogin-link">Register Here
          </Link>
        </p>

        <p className="registerlogin-link-container">
          Admin{' '}
          <Link to="/admin-login" 
          className="registerlogin-link">Login Here
          </Link>
        </p>


        </form>
        <ToastContainer
        className="custom-toast"
        position="bottom-center"
        autoClose={1000}
        closeOnClick />
      </div>
    </div>
  );
};

export default LoginForm;