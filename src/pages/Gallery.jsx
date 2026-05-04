import { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://lubpunjab.onrender.com/api/gallery");
      setGalleryData(res.data);
    } catch (err) {
      console.error("Gallery fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (img) => {
    if (!img) return "";
    return img.startsWith("http") ? img : `https://lubpunjab.onrender.com/uploads/${img}`;
  };

  return (
    <div className="gallery-page-container">
      <div className="gallery-content">
        <div className="gallery-header">
          <h1>Our Gallery</h1>
          <div className="underline"></div>
        </div>

        {loading ? (
          <div className="loading-state">Loading Moments...</div>
        ) : (
          <div className="gallery-grid">
            {galleryData.map((item) => (
              <div key={item._id} className="gallery-item" onClick={() => setSelectedImage(item)}>
                <img src={getImageUrl(item.image)} alt="LUB Punjab Gallery" loading="lazy" />
              </div>
            ))}
          </div>
        )}

        {selectedImage && (
  <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
    <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
      {/* Is button ko dhyan se dekho, onClick yahan zaroori hai */}
      <button 
        className="close-lightbox" 
        onClick={() => setSelectedImage(null)}
        type="button"
      >
        &times;
      </button>
      
      <img src={getImageUrl(selectedImage.image)} alt="Full View" />
      
      {/* Optional: Mobile ke liye niche ek extra close button agar upar wala na dikhe */}
      <p className="mobile-close-text" onClick={() => setSelectedImage(null)}>
        Tap anywhere to close
      </p>
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default Gallery;
