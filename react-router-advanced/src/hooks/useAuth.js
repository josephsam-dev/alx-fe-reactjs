// src/hooks/useAuth.js
import { useState } from "react";

export default function useAuth() {
  // simulate user login
  const [user] = useState({ loggedIn: true }); // change to false to test redirect
  return user;
}
