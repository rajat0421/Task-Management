import React, { useState } from "react";
import axios from "axios";

const Login = ({ setToken }) => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { username, password };
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );
      const token = response.data.token;
      localStorage.setItem("token", token); // Store token in localStorage
      setToken(token); // Pass token to the parent component if needed
      alert("Login successful");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="username"
        placeholder="username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
