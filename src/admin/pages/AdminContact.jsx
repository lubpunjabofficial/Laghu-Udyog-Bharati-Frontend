import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminContact.css";

const AdminContact = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("https://lubpunjab.onrender.com/api/contact");
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await axios.delete(`https://lubpunjab.onrender.com/api/contact/${id}`);
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete ❌");
    }
  };

  return (
    <div className="admin-contact-wrapper">
      <h2>Contact Messages</h2>
      <div className="messages-grid">
        {messages.length === 0 && (
          <p className="no-messages">No messages yet.</p>
        )}
        {messages.map((msg) => (
          <div key={msg._id} className="message-card">
            <div className="message-header">
              <h4>{msg.name}</h4>
              <button
                className="delete-btn"
                onClick={() => handleDelete(msg._id)}
              >
                ❌
              </button>
            </div>
            <div className="message-body">
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Phone:</strong> {msg.phone}</p>
              <p className="user-message">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminContact;
