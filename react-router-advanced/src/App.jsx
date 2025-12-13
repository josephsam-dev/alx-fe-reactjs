// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"; // Auth wrapper
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import UserProfile from "./components/UserProfile";
import BlogPost from "./components/BlogPost"; // Dynamic blog route

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="users/:userId" element={<UserProfile />} /> {/* Dynamic route */}

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          {/* Profile with nested routes */}
          <Route path="profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Blog post dynamic route */}
          <Route path="blog/:id" element={<BlogPost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
