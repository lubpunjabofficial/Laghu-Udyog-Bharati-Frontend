import React, { useState } from "react";
import axios from "axios";
import "./AdminSlider.css";

const AdminSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!selectedImage) return alert("Please select an image");

    const formData = new FormData();
    // 🔥 "image" wahi naam hai jo backend ke multer middleware mein hai
    formData.append("image", selectedImage);

    try {
      setLoading(true);
      // Backend ko request bhejo
      const res = await axios.post("https://lubpunjab.onrender.com/api/sliders", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 201 || res.status === 200) {
        alert("✅ Slider uploaded successfully ");
        setSelectedImage(null);
        setPreview(null);
        // Optional: window.location.reload(); // Agar turant dashboard check karna ho
      }
    } catch (err) {
      console.error("Upload Error:", err.response?.data || err.message);
      alert("❌ Upload failed! Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="slider-page">
      <div className="slider-card">
        <h2>Upload Slider Image</h2>

        <label className="upload-box">
          {preview ? (
            <img src={preview} alt="Preview" />
          ) : (
            <div className="upload-placeholder">
              <span>+</span>
              <p>Click to upload image</p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setSelectedImage(file);
                setPreview(URL.createObjectURL(file));
              }
            }}
          />
        </label>

        <button 
          onClick={handleUpload} 
          disabled={loading}
          style={{ cursor: loading ? "not-allowed" : "pointer" }}
        >
          {loading ? "Uploading to Slider " : "Upload Slider"}
        </button>
      </div>
    </div>
  );
};

export default AdminSlider;
