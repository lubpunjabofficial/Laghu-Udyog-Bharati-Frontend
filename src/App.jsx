import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "/src/styles/global.css";
import Navbar from "./components/Navbar";
import SliderSection from "./components/SliderSection";
import Podcast from "./components/Podcast";
import WhatsAppButton from "./components/WhatsAppButton";
// import SuccessStories from "./components/SuccessStories";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Certificate from "./pages/Certificate";
import Membership from "./pages/Membership";
import Event from "./pages/Event";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/Login";
import AdminPanel from "./admin/AdminPanel";

const App = () => {
  const sliderData = [
    { title: "Slide 1", image: "/src/assets/images/slider1.jpg" },
    { title: "Slide 2", image: "/src/assets/images/slider2.jpg" },
  ];

  // Token check karne ka sahi tarika
  const isAuthenticated = () => {
    const token = localStorage.getItem("adminToken");
    return token ? true : false; 
  };

  return (
    <Router>
      <WhatsAppButton />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <SliderSection sliderData={sliderData} />
            <Podcast />
            {/* <SuccessStories /> */}
          </>
        } />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/Membership" element={<Membership />} />
        
        {/* Login Page: Agar pehle se login ho toh wapas admin pe bhej do */}
        <Route path="/login" element={isAuthenticated() ? <Navigate to="/admin" /> : <Login />} />

        {/* Admin Route: Yahan magic ho raha hai */}
        <Route
          path="/admin/*"
          element={isAuthenticated() ? <AdminPanel /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;