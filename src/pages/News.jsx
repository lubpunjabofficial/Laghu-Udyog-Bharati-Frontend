import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://lubpunjab.onrender.com/api/news")
      .then(res => res.json())
      .then(data => setNewsList(data))
      .catch(err => console.log(err));
  }, []);

  // Helper function for safe truncated HTML preview
  const createPreview = (html, maxLength = 100) => {
    if (!html) return ""; // Check agar content khali ho
    if (html.length <= maxLength) return html;
    return html.slice(0, maxLength) + "...";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Latest News</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {newsList.map((news) => {
          // 🔥 Cloudinary vs Local Image Logic
          const imageUrl = news.image && news.image.startsWith("http")
            ? news.image
            : `https://lubpunjab.onrender.com/uploads/${news.image}`;

          return (
            <div
              key={news._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {news.image && (
                <img
                  src={imageUrl} // 👈 Updated URL use ho raha hai
                  alt={news.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              )}
              <div style={{ padding: "15px", flexGrow: 1 }}>
                <h2>{news.title}</h2>

                <div
                  style={{
                    maxHeight: "80px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: createPreview(news.content),
                  }}
                />

                <Link
                  to={`/news/${news._id}`}
                  style={{ color: "blue", fontWeight: "bold", marginTop: "10px", display: "inline-block" }}
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
