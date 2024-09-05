import React from 'react';
import AssistantIcon from './assistant.png';
import Gravatar from 'react-gravatar';
import LoadingSpinner from './LoadingSpinner';

const Text = ({ role, content ,email}) => {
  let icon;

  if (role === 'user') {
    icon = <Gravatar email={email} className="message-icon" />;
  } else if (role === 'assistant') {
    icon = <img src={AssistantIcon} alt="Assistant Icon" className="message-icon" />;
  }
  let messageContent;
  if(content==="Loading..."){
    messageContent=<LoadingSpinner />;
  }
  else{
    messageContent=content;
  }
  return (
    <div className={`message ${role}`}>
      {icon}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      <span style={role === 'assistant' ? { color: 'pink' } : { color: 'white' }} className="message-content">
        {messageContent}
      </span>
    </div>
  );
};

export default Text;