// src/components/Profile.jsx

// 1️⃣ Imports go here at the top
import { Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

// 2️⃣ Component definition
export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
