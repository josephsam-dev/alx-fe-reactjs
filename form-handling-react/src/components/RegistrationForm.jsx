import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    // Basic validation logic
    if (!username) validationErrors.username = "Username is required";
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";

    setErrors(validationErrors);

    // Stop submission if any errors exist
    if (Object.keys(validationErrors).length > 0) return;

    // Success
    alert(`Registration successful!\nUsername: ${username}\nEmail: ${email}`);

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
