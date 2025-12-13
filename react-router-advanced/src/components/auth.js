// src/components/auth.js
export const isAuthenticated = () => {
  // Simple simulation: returns true if user is "logged in"
  return localStorage.getItem("loggedIn") === "true";
};
