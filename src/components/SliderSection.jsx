import React, { useState, useEffect } from "react";
import "./SliderSection.css";

const SliderSection = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  // Cloudinary URL optimizer function
  const optimizeImageUrl = (url) => {
    if (!url) return "";
    if (url.includes("cloudinary.com")) {
      // Inject optimization parameters: auto format, auto quality, width 1200, crop fill
      return url.replace("/upload/", "/upload/f_auto,q_auto,w_1200,c_fill/");
    }
    return url;
  };

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        setLoading(true);
        // Step 1: Fetch only the first slider for instant display
        const firstRes = await fetch("https://lubpunjab.onrender.com/api/sliders?limit=1"); 
        const firstData = await firstRes.json();
        
        if (firstData.length > 0) {
          const firstSlide = {
            id: firstData[0]._id,
            image: firstData[0].image.startsWith("http") 
                   ? optimizeImageUrl(firstData[0].image) 
                   : `https://lubpunjab.onrender.com/uploads/${firstData[0].image}`
          };
          setSlides([firstSlide]);
          setLoading(false); // Stop loading as soon as we have one slide
        }

        // Step 2: Fetch all sliders in the background
        const allRes = await fetch("https://lubpunjab.onrender.com/api/sliders"); 
        const allData = await allRes.json();
        
        const formatted = allData.map((slide) => ({
          id: slide._id,
          image: slide.image.startsWith("http") 
                 ? optimizeImageUrl(slide.image) 
                 : `https://lubpunjab.onrender.com/uploads/${slide.image}`
        }));

        setSlides(formatted);
      } catch (err) {
        console.error("Failed to fetch sliders:", err);
      } finally {
        setLoading(false);
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

  // Skeleton Loader Component
  if (loading) {
    return (
      <section className="slider-section">
        <div className="slider-container">
          <div className="skeleton-slider"></div>
        </div>
      </section>
    );
  }

  if (!slides.length) return null;

  return (
    <section className="slider-section">
      <div className="slider-container">
        <div className="image-slider">
          {slides.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={`slider-${index}`}
              className={`slider-img ${index === currentSlide ? "active" : ""}`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}

          <button className="nav prev" onClick={prevSlide} aria-label="Previous Slide">
            ‹
          </button>
          <button className="nav next" onClick={nextSlide} aria-label="Next Slide">
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
