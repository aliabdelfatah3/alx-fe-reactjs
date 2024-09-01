// src/components/RegistrationForm.jsx
import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username Is Requiered";
    if (!email) newErrors.email = "Email Is Requiered";
    if (!password) newErrors.password = "Password Is Requiered";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }
    console.log("Form submitted:", { username, email, password });
    // Here you can send the data to the mock API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
