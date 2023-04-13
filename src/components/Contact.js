import React, { useState } from "react";

import { validateEmail } from "./utils/helpers";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [textarea, setTextarea] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email  is invalid");
      return;
    }

    setName("");
    setTextarea("");

    setEmail("");
  };

  return (
    <div id="contact-container">
      <h1>Contact</h1>
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
        <button
          type="button"
          id="submit-button"
          onClick={handleFormSubmit}
          onChange={handleInputChange}
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
