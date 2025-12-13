// src/components/Home.jsx

export default function Home() {
  return <h2>Home Page</h2>;
}
export default function Home() {
  const login = () => localStorage.setItem("loggedIn", "true");
  const logout = () => localStorage.setItem("loggedIn", "false");

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
