// src/components/UserProfile.jsx
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { userId } = useParams(); // Grab the dynamic part from URL

  return (
    <div>
      <h2>User Profile</h2>
      <p>Showing information for user ID: {userId}</p>
    </div>
  );
}
