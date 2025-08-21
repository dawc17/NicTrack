import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdInventory } from "react-icons/md";
import { FaInfoCircle, FaHome } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

// Icon components using react-icons
const HomeIcon = ({ active }) => (
  <FaHome size={24} color={active ? "#3B82F6" : "#6B7280"} />
);

const ProductsIcon = ({ active }) => (
  <MdInventory size={24} color={active ? "#3B82F6" : "#6B7280"} />
);

const SettingsIcon = ({ active }) => (
  <FaGear size={24} color={active ? "#3B82F6" : "#6B7280"} />
);

const AboutIcon = ({ active }) => (
  <FaInfoCircle size={24} color={active ? "#3B82F6" : "#6B7280"} />
);

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", path: "/", label: "Home", icon: HomeIcon },
    {
      id: "products",
      path: "/products",
      label: "Products",
      icon: ProductsIcon,
    },
    {
      id: "settings",
      path: "/settings",
      label: "Settings",
      icon: SettingsIcon,
    },
    {
      id: "about",
      path: "/about",
      label: "About",
      icon: AboutIcon,
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className="flex flex-col items-center justify-center flex-1 h-full transition-colors duration-200 hover:bg-gray-200"
            >
              <IconComponent active={isActive} />
              <span
                className={`text-xs mt-1 font-medium ${
                  isActive ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
