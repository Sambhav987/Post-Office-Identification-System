import React,{useState} from 'react';
import firebase,{db} from '../firebase-config';
import { useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered:", user);
        notifySuccess();
        navigate('/');
        db.collection('users').doc(userCredential.user.uid).set({
          email:userCredential.user.email,
          chats:[]
        })
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        notifyError();
      });
  };
  const notifySuccess = () => toast.success('Register successful!');
  const notifyError = () => toast.error('Register failed');

  return (
    <div className="form-container">
        <h2>Register to <span class="mail-potato">Mail Potato</span></h2>
        <div className="form-wrapper">
        <form
        onSubmit={handleRegister}>
          
          <input 
          type="text" 
          spellCheck="false" 
          onInput={(e) => (e.target.value = e.target.value.toLowerCase())}
          className="form-input" 
          placeholder="Enter Email"
          onChange={(e)=>setEmail(e.target.value)}/>

          <input 
          type="password" 
          spellCheck="false" 
          className="form-input" 
          placeholder="Enter Password" 
          onChange={(e)=>setPassword(e.target.value)}/>

          <button 
          type="submit" 
          className="form-submit">Register</button>

        </form>
        
        <p className="registerlogin-link-container">
          Already Signed Up?{' '}
          <Link to="/login" 
          className="registerlogin-link">Login Here
          </Link>
        </p>
        <ToastContainer
        className="custom-toast"
        position="bottom-center"
        autoClose={1000}
        closeOnClick />
        </div>
      </div>
  );
};

export default RegisterForm;