import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost"; // dynamic route

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Home />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
