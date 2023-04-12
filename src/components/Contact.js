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
    alert(`Hello ${name}`);
  };

  return (
    <div>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />

        <textarea
          name="textarea"
          value={textarea}
          onChange={handleInputChange}
          type="textarea"
          placeholder="Message me Here"
        />
        <button
          type="button"
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
