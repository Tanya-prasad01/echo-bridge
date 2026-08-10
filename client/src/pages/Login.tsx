import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("echoBridgeUser");

    if (!savedUser) {
      alert("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (email === user.email && password === user.password) {
      localStorage.setItem("echoBridgeLoggedIn", "true");

      alert(`Welcome ${user.name}!`);

      navigate("/");
      window.location.reload();
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Login</h1>

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>

    </div>
  );
};

export default Login;