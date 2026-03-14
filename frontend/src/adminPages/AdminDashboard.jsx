import { NavLink, Outlet } from "react-router-dom";

const sidebarLinks = [
  { to: "slider", label: "Slider" },
  { to: "products", label: "Products" },
  { to: "contacts", label: "Contacts" },
];

const Sidebar = () => (
  <div className="flex flex-col gap-2 bg-gray-100 p-4 min-h-screen w-48">
    {sidebarLinks.map((link) => (
      <NavLink
        key={link.to}
        to={link.to}
        className={({ isActive }) =>
          `block px-4 py-2 rounded hover:bg-blue-100 ${
            isActive ? "bg-blue-500 text-white" : "text-gray-700"
          }`
        }
        end
      >
        {link.label}
      </NavLink>
    ))}
    <div>
      <button className="bg-red-700 text-white block px-4 py-2 rounded hover:bg-red-100">
        Logout
      </button>
    </div>
  </div>
);

const AdminDashboard = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 p-6">
      <Outlet />
    </div>
  </div>
);

export default AdminDashboard;
