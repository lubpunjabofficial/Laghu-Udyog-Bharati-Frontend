import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // 👈 axios import kiya

const BlogDetails = () => {
  const { id } = useParams(); // URL se _id nikalega
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        // 🚀 Backend API se single blog fetch karo
        const res = await axios.get(`https://lubpunjab.onrender.com/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleBlog();
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading Blog Details...</h2>;
  
  if (!blog) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Blog Not Found</h2>;

  // 🔥 Image URL logic
  const imageUrl = blog.image && blog.image.startsWith("http")
    ? blog.image
    : `https://lubpunjab.onrender.com/uploads/${blog.image}`;

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "8px 12px",
          backgroundColor: "#1e90ff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <h1 style={{ marginTop: 0 }}>{blog.title}</h1>

        {blog.image && (
          <img
            src={imageUrl}
            alt={blog.title}
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              borderRadius: "10px",
              margin: "20px 0",
              display: "block",
            }}
          />
        )}

        {/* ⚡ Quill content ko render karne ke liye dangerouslySetInnerHTML zaroori hai */}
        <div
          dangerouslySetInnerHTML={{ __html: blog.content }}
          style={{ lineHeight: "1.6", fontSize: "16px" }}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
