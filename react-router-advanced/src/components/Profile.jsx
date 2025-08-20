import { NavLink, Outlet } from "react-router-dom";

const tab = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm ${
    isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
  }`;

export default function Profile() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">My Profile</h1>
      <nav className="flex gap-2 mb-4">
        <NavLink to="details" className={tab}>
          Details
        </NavLink>
        <NavLink to="settings" className={tab}>
          Settings
        </NavLink>
      </nav>
      <div className="rounded-lg border p-4">
        <Outlet />
      </div>
    </section>
  );
}
