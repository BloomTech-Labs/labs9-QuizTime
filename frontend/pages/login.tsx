import { useState } from "react";
import { Text, Button } from "@rebass/emotion";
import Router from "next/router";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    window &&
      window.localStorage.setItem(
        "login-creds",
        JSON.stringify({ email, password })
      );
    Router.push("/");
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        <Text fontFamily="sans">Email</Text>
      </label>
      <input
        id="email"
        name="email"
        type="text"
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="password">
        <Text fontFamily="sans">Password</Text>
      </label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit} variant="primary">
        Login
      </Button>
    </form>
  );
};

export default Login;
