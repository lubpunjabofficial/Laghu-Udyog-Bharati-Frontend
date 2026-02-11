import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./News.css"; 

const News = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !image) {
      alert("Please complete all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    try {
      setLoading(true);
      const res = await fetch("https://lubpunjab.onrender.com/api/news", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      alert("Success! News article has been published.");
      setTitle("");
      setContent("");
      setImage(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Error: Unable to publish news.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="news-page-wrapper">
      <div className="news-card">
        <div className="news-header">
          <h1>Publish News Article</h1>
          <p>Create and upload the latest updates for your readers</p>
        </div>

        <form className="news-form-new" onSubmit={handleSubmit}>
          <div className="input-section">
            <label className="field-label">Article Title</label>
            <input
              type="text"
              className="modern-input"
              placeholder="Enter a catchy headline..."
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="upload-section">
            <label className="field-label">Feature Image</label>
            <input 
              type="file" 
              id="news-image-upload" 
              accept="image/*" 
              hidden 
              onChange={handleImageChange} 
            />
            <label htmlFor="news-image-upload" className="modern-upload-box">
              {preview ? (
                <div className="preview-wrap">
                  <img src={preview} alt="Preview" />
                  <div className="overlay-text">Replace Image</div>
                </div>
              ) : (
                <div className="placeholder-text">
                  <span className="icon">🖼️</span>
                  <span>Click to select feature image</span>
                </div>
              )}
            </label>
          </div>

          <div className="editor-section">
            <label className="field-label">News Body Content</label>
            <div className="modern-quill-container">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                placeholder="Start typing the news story..."
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={`modern-submit-btn ${loading ? "is-loading" : ""}`} 
            disabled={loading}
          >
            {loading ? "Publishing to Server..." : "Publish Article"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default News;