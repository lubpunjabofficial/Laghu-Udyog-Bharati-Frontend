import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [showSliders, setShowSliders] = useState(false);
  const [showBlogs, setShowBlogs] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const [images, setImages] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [newsList, setNewsList] = useState([]);

  const getImageUrl = (img) => {
    if (!img) return "";
    return img.startsWith("http") ? img : `https://lubpunjab.onrender.com/uploads/${img}`;
  };

  // --- FETCH FUNCTIONS ---
  const fetchImages = async () => {
    try {
      const res = await fetch("https://lubpunjab.onrender.com/api/gallery");
      const data = await res.json();
      setImages(data);
    } catch (err) { console.error("Gallery Fetch Error:", err); }
  };

  const fetchSliders = async () => {
    try {
      const res = await fetch("https://lubpunjab.onrender.com/api/sliders");
      const data = await res.json();
      setSliders(data);
    } catch (err) { console.error("Slider Fetch Error:", err); }
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch("https://lubpunjab.onrender.com/api/blogs/all");
      const data = await res.json();
      setBlogs(data);
    } catch (err) { console.error("Blog Fetch Error:", err); }
  };

  const fetchNews = async () => {
    try {
      const res = await fetch("https://lubpunjab.onrender.com/api/news");
      const data = await res.json();
      setNewsList(data);
    } catch (err) { console.error("News Fetch Error:", err); }
  };

  // --- DELETE HANDLERS ---
  const handleDeleteImage = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const res = await fetch(`https://lubpunjab.onrender.com/api/gallery/${id}`, { method: "DELETE" });
      if (res.ok) setImages(images.filter((img) => img._id !== id));
    } catch (err) { alert("Error deleting."); }
  };

  const handleDeleteSlider = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const res = await fetch(`https://lubpunjab.onrender.com/api/sliders/${id}`, { method: "DELETE" });
      if (res.ok) setSliders(sliders.filter((s) => s._id !== id));
    } catch (err) { alert("Error deleting."); }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const res = await fetch(`https://lubpunjab.onrender.com/api/blogs/delete/${id}`, { method: "DELETE" });
      if (res.ok) setBlogs(blogs.filter((b) => b._id !== id));
    } catch (err) { alert("Error deleting."); }
  };

  const handleDeleteNews = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const res = await fetch(`https://lubpunjab.onrender.com/api/news/${id}`, { method: "DELETE" });
      if (res.ok) {
        setNewsList(newsList.filter((n) => n._id !== id));
        alert("✅ News deleted successfully.");
      }
    } catch (err) { alert("❌ Error deleting news."); }
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#f4f7f6", minHeight: "100vh" }}>
      <h1 style={{ color: "#333", borderBottom: "2px solid #333", paddingBottom: "10px" }}>Admin Dashboard</h1>
      
      <div style={{ marginBottom: "30px", marginTop: "20px" }}>
        <button onClick={() => { setShowGallery(!showGallery); if(!showGallery) fetchImages(); }} style={btnStyle}>
          {showGallery ? "Hide Gallery" : "Manage Gallery"}
        </button>
        
        <button onClick={() => { setShowSliders(!showSliders); if(!showSliders) fetchSliders(); }} style={btnStyle}>
          {showSliders ? "Hide Sliders" : "Manage Sliders"}
        </button>
        
        <button onClick={() => { setShowBlogs(!showBlogs); if(!showBlogs) fetchBlogs(); }} style={btnStyle}>
          {showBlogs ? "Hide Blogs" : "Manage Blogs"}
        </button>

        <button onClick={() => { setShowNews(!showNews); if(!showNews) fetchNews(); }} style={{ ...btnStyle, backgroundColor: "#007bff" }}>
          {showNews ? "Hide News" : "Manage News"}
        </button>
      </div>

      {/* --- GALLERY SECTION --- */}
      {showGallery && (
        <div style={sectionStyle}>
          <h3>Gallery Management</h3>
          {images.length === 0 ? <p>No images found.</p> : 
            images.map((img) => (
              <div key={img._id} style={itemRowStyle}>
                <img src={getImageUrl(img.image)} width="100" height="60" style={imgStyle} alt="" />
                <div style={{ flex: 1, marginLeft: "20px" }}>
                   <p style={{ margin: 0 }}>{img.title || "Image"}</p>
                </div>
                <button onClick={() => handleDeleteImage(img._id)} style={deleteBtnStyle}>Delete</button>
              </div>
            ))
          }
        </div>
      )}

      {/* --- SLIDERS SECTION --- */}
      {showSliders && (
        <div style={sectionStyle}>
          <h3>Slider Management</h3>
          {sliders.length === 0 ? <p>No sliders found.</p> : 
            sliders.map((s) => (
              <div key={s._id} style={itemRowStyle}>
                <img src={getImageUrl(s.image)} width="100" height="60" style={imgStyle} alt="" />
                <div style={{ flex: 1, marginLeft: "20px" }}>
                   <p style={{ margin: 0 }}>{s.title || "Slider"}</p>
                </div>
                <button onClick={() => handleDeleteSlider(s._id)} style={deleteBtnStyle}>Delete</button>
              </div>
            ))
          }
        </div>
      )}

      {/* --- BLOGS SECTION --- */}
      {showBlogs && (
        <div style={sectionStyle}>
          <h3>Blog Management</h3>
          {blogs.length === 0 ? <p>No blogs found.</p> : 
            blogs.map((b) => (
              <div key={b._id} style={itemRowStyle}>
                <img src={getImageUrl(b.image)} width="100" height="60" style={imgStyle} alt="" />
                <div style={{ flex: 1, marginLeft: "20px" }}>
                   <p style={{ margin: 0, fontWeight: "bold" }}>{b.title}</p>
                </div>
                <button onClick={() => handleDeleteBlog(b._id)} style={deleteBtnStyle}>Delete</button>
              </div>
            ))
          }
        </div>
      )}

      {/* --- NEWS SECTION --- */}
      {showNews && (
        <div style={sectionStyle}>
          <h3>News Management</h3>
          {newsList.length === 0 ? <p>No news found.</p> : 
            newsList.map((n) => (
              <div key={n._id} style={itemRowStyle}>
                <img src={getImageUrl(n.image)} width="100" height="60" style={imgStyle} alt="" />
                <div style={{ flex: 1, marginLeft: "20px" }}>
                  <p style={{ margin: 0, fontWeight: "bold" }}>{n.title}</p>
                  <small style={{ color: "#888" }}>{new Date(n.createdAt).toLocaleDateString()}</small>
                </div>
                <button onClick={() => handleDeleteNews(n._id)} style={deleteBtnStyle}>Delete</button>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
};

// Styles
const btnStyle = { padding: "10px 20px", cursor: "pointer", backgroundColor: "#333", color: "#fff", border: "none", borderRadius: "4px", marginRight: "10px" };
const sectionStyle = { background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", marginTop: "20px" };
const itemRowStyle = { display: "flex", alignItems: "center", borderBottom: "1px solid #eee", padding: "10px 0" };
const imgStyle = { objectFit: "cover", borderRadius: "4px" };
const deleteBtnStyle = { color: "red", background: "none", border: "1px solid red", padding: "5px 15px", borderRadius: "4px", cursor: "pointer" };

export default Dashboard;