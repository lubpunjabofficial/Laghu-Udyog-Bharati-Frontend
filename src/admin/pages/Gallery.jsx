import React, { useState } from "react"; 
import axios from "axios";
import "./Gallery.css";

const Gallery = () => {
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

  const handleUpload = async (e) => {
    if(e) e.preventDefault();
    if (!image) return alert("Pehle image select karein");

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      const res = await axios.post("https://lubpunjab.onrender.com/api/gallery/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 200 || res.status === 201) {
        alert("✅ Gallery Image Uploaded!");
        setImage(null);
        setPreview(null);
      }
    } catch (error) {
      alert("❌ Upload fail ho gaya");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gallery-wrapper">
      <div className="gallery-card">
        <div className="gallery-header">
          <h2>Upload to Gallery</h2>
          <p>Share your latest photos</p>
        </div>

        <div className="upload-area">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="gallery-input-new"
            style={{ display: 'none' }}
          />
          
          <label htmlFor="gallery-input-new" className="upload-label" style={{ display: 'block', minHeight: '200px' }}>
            {preview ? (
              <div className="preview-container">
                <img src={preview} alt="Preview" className="img-preview" />
              </div>
            ) : (
              <div className="upload-placeholder">
                <div className="icon">📸</div>
                <span>Click to Select Image</span>
              </div>
            )}
          </label>
        </div>

        {/* --- BUTTON SECTION --- */}
        <div style={{ marginTop: '20px', clear: 'both' }}>
          <button 
            type="button"
            onClick={handleUpload} 
            disabled={loading}
            className="gallery-unique-btn"
          >
            {loading ? "Uploading..." : "Publish to Gallery"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;