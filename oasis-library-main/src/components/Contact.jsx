
import React, { useState } from 'react';
import Navbar from './Navbar';
import './Contact.css';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(newEmail);
    setIsValidEmail(isValid || newEmail === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert('Please enter your first and last name.');
      return;
    }
    if (!isValidEmail || !email) {
      alert('Invalid email address. Please enter a valid email.');
      return;
    }
    alert('Message sent successfully! We will get back to you soon.');
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setIsValidEmail(true);
  };

  return (
    <div className="contact-wrapper">
      <Navbar />
      <div className="cont">
        <h1>
          <span className="orange">C</span>ontact U<span className="orange">s</span>
        </h1>
        <div className="contact">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="c1"
                placeholder="First name *"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="c2"
                placeholder="Last name *"
              />
            </div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={`c3 ${!isValidEmail ? 'invalid' : ''}`}
              placeholder="Email address *"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="c4"
              placeholder="Message"
            />
            <button type="submit" className="btt">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
