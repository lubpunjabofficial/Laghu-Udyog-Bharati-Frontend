import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBlog,
  FaCalendarAlt,
  FaNewspaper,
  FaTimes,
  FaSlidersH,
  FaSignOutAlt,
} from "react-icons/fa";

import Dashboard from "./pages/Dashboard";
import Slider from "./pages/AdminSlider";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
import News from "./pages/News";
import Admincontact from "./pages/Admincontact";

import "./AdminPanel.css";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  const location = useLocation();
  const navigate = useNavigate();

  // 🔐 Admin auth protection
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  // 📱 Resize handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
      if (window.innerWidth >= 769) setSidebarOpen(true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login", { replace: true });
  };

  const handleLinkClick = () => {
    if (isMobile) setSidebarOpen(false);
  };

  // ✅ ALL ROUTES LOWERCASE (IMPORTANT)
  const navItems = [
    { to: "/admin", label: "Dashboard" },
    { to: "/admin/slider", label: "Slider" },
    { to: "/admin/gallery", label: "Gallery" },
    { to: "/admin/blogs", label: "Blogs" },
    { to: "/admin/events", label: "Events" },
    { to: "/admin/news", label: "News" },
    { to: "/admin/admincontact", label: "Contact" },
  ];

  return (
    <div className="admin-container">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside className="sidebar expanded">
          <div className="sidebar-header">
            <h2>Admin Panel</h2>
          </div>

          <nav className="sidebar-nav">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className={location.pathname === item.to ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}

            <button onClick={handleLogout} className="logout-link">
              <FaSignOutAlt style={{ marginRight: "10px" }} />
              Logout
            </button>
          </nav>
        </aside>
      )}

      {/* Mobile Sidebar */}
      {isMobile && sidebarOpen && (
        <div className="mobile-buttons-panel">
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>
            <FaTimes size={20} />
          </button>

          <nav className="mobile-nav-buttons">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                onClick={handleLinkClick}
                className="btn"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={handleLogout}
              className="btn logout-btn-mobile"
              style={{ backgroundColor: "#d9534f" }}
            >
              Logout
            </button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="admin-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/admincontact" element={<Admincontact />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminPanel;
