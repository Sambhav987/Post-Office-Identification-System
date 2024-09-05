import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import firebase from '../firebase-config';

const HomeInput = () => {
    const [userInput, setUserInput] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const user = firebase.auth().currentUser;
        if (user) {
            setUserEmail(user.email);
        }
    }, []);

    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            // Handle sending user input if needed (e.g., logging, displaying, etc.)
            console.log(`Message from ${userEmail}: ${userInput}`);
            setUserInput('');
        }
    };

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="home-input-container">
          <div className="input-wrapper">
            <input
              className="input-field"
              type="text"
              value={userInput}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              placeholder="Enter a location"
            />
            <button onClick={handleSendMessage} className="send-button">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      );
}

export default HomeInput;
