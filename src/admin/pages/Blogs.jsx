import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios"; 
import "react-quill/dist/quill.snow.css";
import "./AdminBlog.css"; // 🔥 CSS alag file mein rakhenge professional lagta hai

const AdminBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !image) return alert("All fields are mandatory.");

    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("author", "Admin");

    try {
      const res = await axios.post("https://lubpunjab.onrender.com/api/blogs/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 201 || res.status === 200) {
        alert("Success! Your blog is now live. ✅");
        setTitle("");
        setContent("");
        setImage(null);
        setPreview(null);
      }
    } catch (err) {
      console.error("Upload Error:", err);
      alert("Something went wrong while posting.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-blog-wrapper">
      <div className="admin-blog-card">
        <header className="admin-blog-header">
          <h2>Create Blog Post</h2>
          <p>Draft your story and publish it to the main feed</p>
        </header>

        <form className="admin-blog-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Blog Title</label>
            <input
              type="text"
              placeholder="Enter a compelling title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="modern-input"
            />
          </div>

          <div className="input-group">
            <label>Feature Image</label>
            <div className={`modern-upload-zone ${preview ? "has-preview" : ""}`}>
              <input
                type="file"
                id="blog-image"
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
              <label htmlFor="blog-image" className="upload-label">
                {preview ? (
                  <img src={preview} alt="Preview" className="blog-preview-img" />
                ) : (
                  <div className="placeholder">
                    <span className="icon">📸</span>
                    <span>Click to upload image</span>
                  </div>
                )}
              </label>
            </div>
          </div>

          <div className="input-group">
            <label>Content</label>
            <div className="quill-modern-container">
              <ReactQuill 
                theme="snow" 
                value={content} 
                onChange={setContent} 
                placeholder="Write your content here..."
              />
            </div>
          </div>

          <button type="submit" className="publish-btn" disabled={loading}>
            {loading ? (
              <div className="btn-content">
                <span className="mini-loader"></span>
                Publishing...
              </div>
            ) : (
              "Publish Post"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminBlog;