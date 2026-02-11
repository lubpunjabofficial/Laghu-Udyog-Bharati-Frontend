import React, { useState, useEffect } from "react";
import "./SliderSection.css";

const SliderSection = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        // https://lubpunjab.onrender.com
        const res = await fetch("https://lubpunjab.onrender.com/api/sliders"); 
        const data = await res.json();
        
        // 🔥 Yahan humne logic update kiya hai
        const formatted = data.map((slide) => {
          let imageUrl = "";

          // Agar image link "http" se shuru ho raha hai (Cloudinary wala link)
          if (slide.image && slide.image.startsWith("http")) {
            imageUrl = slide.image;
          } else {
            // Agar purana local image hai (uploads folder wala)
            imageUrl = `https://lubpunjab.onrender.com/uploads/${slide.image}`;
          }

          return {
            id: slide._id,
            image: imageUrl,
          };
        });

        setSlides(formatted);
      } catch (err) {
        console.error("Failed to fetch sliders:", err);
      }
    };
    fetchSliders();
  }, []);

  useEffect(() => {
    if (!slides.length) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  if (!slides.length) return <p className="loading-text">Loading...</p>;

  return (
    <section className="slider-section">
      <div className="slider-container">
        <div className="image-slider">
          <img
            src={slides[currentSlide].image}
            alt="slider"
            className="slider-img"
          />

          <button className="nav prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="nav next" onClick={nextSlide}>
            ›
          </button>
        </div>

        <div className="dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderSection;