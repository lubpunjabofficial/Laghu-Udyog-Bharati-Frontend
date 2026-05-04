import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // 👈 axios import karo
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loading state
  const navigate = useNavigate();

  useEffect(() => {
    // 🔥 Database se blogs lane ka function
    const fetchBlogs = async () => {
      try {
        // Tumhara backend route "/all" par saare blogs deta hai
        const res = await axios.get("https://lubpunjab.onrender.com/api/blogs/all");
        setBlogs(res.data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading Blogs...</h2>;

  return (
    <section className="blog-section">
      <h1>Our Blog</h1>

      <div className="blog-grid">
        {blogs.length === 0 ? (
          <p>No blogs found. Post one from Admin!</p>
        ) : (
          blogs.map((blog) => {
            // Image URL logic (Cloudinary ready)
            const imageUrl = blog.image && blog.image.startsWith("http")
              ? blog.image
              : `https://lubpunjab.onrender.com/uploads/${blog.image}`;

            return (
              <div key={blog._id} className="blog-card">
                <div
                  className="blog-image"
                  onClick={() => navigate(`/blog/${blog._id}`)}
                >
                  <img src={imageUrl} alt={blog.title} />
                </div>

                <div className="blog-content">
                  <h2>{blog.title}</h2>
                  {/* HTML tags hatane ke liye regex use kiya (Quill content ke liye) */}
                  <p>{blog.content.replace(/<[^>]+>/g, "").slice(0, 100)}...</p>

                  <button
                    className="read-more"
                    onClick={() => navigate(`/blog/${blog._id}`)}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Blog;
