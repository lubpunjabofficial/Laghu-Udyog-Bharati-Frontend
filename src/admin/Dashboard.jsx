import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await axios.get("https://lubpunjab.onrender.com/api/gallery");
      setImages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://lubpunjab.onrender.com/api/gallery/${id}`);
      setImages(images.filter((img) => img._id !== id));
      alert("Deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Delete failed!");
    }
  };

  return (
    <div>
      <h2>All Images</h2>
      <div className="images-grid">
        {images.map((img) => (
          <div key={img._id} className="image-card">
            <img src={`https://lubpunjab.onrender.com/uploads/${img.image}`} alt={img.title} />
            <h3>{img.title}</h3>
            <p>{img.description}</p>
            <button onClick={() => handleDelete(img._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
