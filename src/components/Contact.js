import React, { useState } from "react";

// imports email validator from utils
import { validateEmail } from "./utils/helpers";

// Contact page
const Contact = () => {
  // Makes all contact form values start empty
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [textarea, setTextarea] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Allows values to change
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setTextarea(inputValue);
    }
  };

  // Determines if email is invalid and sets values to be empty after submit button is pressed
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email  is invalid");
      return;
    } else {
      setErrorMessage("");
    }

    setName("");
    setTextarea("");

    setEmail("");
  };

  return (
    <div id="contact-container">
      <h1>Contact</h1>
      <p id="requirements">Please fill out all fields.</p>

      <form className="form">
        <p>Name:</p>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <p>Email:</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <p>Message:</p>
        <textarea
          name="textarea"
          id="textarea"
          value={textarea}
          onChange={handleInputChange}
          type="textarea"
          placeholder="Message me Here"
        />
        <p>{errorMessage}</p>
        <button
          type="button"
          id="submit-button"
          // If all forms are filled, button is usable. Otherwise, its not
          disabled={!email || !textarea || !name}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
