import React, { useState } from 'react';

import Button from './Button';

import './Styles.scss';

const MessageInput = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onMessageChange(newMessage);
    setNewMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <label className="Form__label">
        <h1 className="Form__header">What's making you happy right now?</h1>
        <textarea
          className="Form__textarea"
          rows="4"
          maxLength="140"
          value={newMessage}
          onChange={event => setNewMessage(event.target.value)}
          placeholder="Write your happy thought..."
        ></textarea>
      </label>
      <p className="Form__text">
        <span
          className={
            newMessage.length < 6 || newMessage.length > 140
              ? 'Form__text--red'
              : 'Form__text--green'
          }
        >
          {140 - newMessage.length}
        </span>
        / 140
      </p>
      <Button
        type="submit"
        className="Button Button__submit"
        disabled={
          newMessage.length < 6 || newMessage.length > 140 ? true : false
        }
        text={
          <>
            <img
              className="Button__icon"
              src="./assets/heart.svg"
              alt="heart icon"
            />
            <p>Send Happy Thought</p>
            <img
              className="Button__icon"
              src="./assets/heart.svg"
              alt="heart icon"
            />
            {/* <span role="img" aria-label="Heart">
              {' ❤️'}
            </span> */}
          </>
        }
      />
    </form>
  );
};

export default MessageInput;