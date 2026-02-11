import React, { useState, useEffect } from "react";
import "./Event.css";

// Temporary events data
const tempEvents = [
  {
    id: 1,
    title: "Startup Workshop 2026",
    date: "Feb 10, 2026",
    image: "https://source.unsplash.com/400x200/?workshop,team",
    description: "Join our workshop to learn how to launch your startup successfully."
  },
  {
    id: 2,
    title: "Tech Conference 2026",
    date: "Mar 15, 2026",
    image: "https://source.unsplash.com/400x200/?conference,technology",
    description: "Annual tech conference discussing the latest trends in AI and Web Development."
  },
  {
    id: 3,
    title: "Community Meetup",
    date: "Apr 05, 2026",
    image: "https://source.unsplash.com/400x200/?meetup,networking",
    description: "Meet like-minded individuals and grow your professional network."
  }
];

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
   
    setEvents(tempEvents);
  }, []);

  return (
    <section className="event-section">
      <h1>Upcoming Events</h1>
      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="event-content">
              <h2>{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
              <button className="register-btn">Register</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Event;
