import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const links = [
    { name: "Dashboard", path: "/dashboard", icon: "⌂" },
    { name: "Expenses", path: "/expenses", icon: "₹" },
    { name: "Analytics", path: "/analytics", icon: "◉" },
    { name: "Profile", path: "/profile", icon: "●" },
    { name: "Settings", path: "/settings", icon: "⚙" },
  ];

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-[#11111d] border-r border-violet-500/10 p-6 flex-col">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Expense<span className="text-violet-500">X</span>
        </h1>

        <p className="text-xs text-gray-500 mt-1">
          Smart expense management
        </p>
      </div>

      <nav className="mt-12 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <span>{link.icon}</span>
            {link.name}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => navigate("/")}
        className="mt-auto text-left px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition"
      >
        ↪ Logout
      </button>
    </aside>
  );
}

export default Sidebar;