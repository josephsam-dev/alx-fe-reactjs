// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    // Redirect to home if not logged in
    return <Navigate to="/" replace />;
  }
  return children;
}
import ProtectedRoute from "./components/ProtectedRoute";

// inside <Routes> in App.jsx
<Route
  path="profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
>
  <Route path="details" element={<ProfileDetails />} />
  <Route path="settings" element={<ProfileSettings />} />
</Route>
