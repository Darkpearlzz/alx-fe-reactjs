import { Routes, Route, NavLink } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

export default function Profile() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-semibold mb-4">My Profile</h1>

      <nav className="flex gap-3 mb-4">
        <NavLink
          to="details"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive ? "bg-blue-600 text-white" : "bg-gray-100"
            }`
          }
        >
          Details
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive ? "bg-blue-600 text-white" : "bg-gray-100"
            }`
          }
        >
          Settings
        </NavLink>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route index element={<ProfileDetails />} />
        {/* default route shows details */}
      </Routes>
    </section>
  );
}
