import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setActivePage, activePage }) => {
  const menuItems = ["dashboard", "slider",  "gallery", "blogs", "events", "news","Admincontact"];

  return (
    <aside className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            className={activePage === item ? "active" : ""}
            onClick={() => setActivePage(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
