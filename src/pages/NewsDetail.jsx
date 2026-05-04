import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewsDetail.css";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://lubpunjab.onrender.com/api/news/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="news-status">Loading...</div>;
  if (!news) return <div className="news-status">News not found.</div>;

  const imageUrl = news.image?.startsWith("http")
    ? news.image
    : `https://lubpunjab.onrender.com/uploads/${news.image}`;

  return (
    <div className="clean-news-wrapper">
      {/* Back Link - No Button Box, Just Text */}
      <div className="navigation-area">
        <span className="back-link-text" onClick={() => navigate(-1)}>
          ← Back to News
        </span>
      </div>

      <article className="clean-article-container">
        {/* Headline without box */}
        <h1 className="news-main-title">{news.title}</h1>
        
       <div className="news-date-line">
   {
    news.createdAt && !isNaN(new Date(news.createdAt).getTime()) 
      ? new Date(news.createdAt).toLocaleDateString("en-US", { 
          year: 'numeric', month: 'long', day: 'numeric' 
        })
      : new Date().toLocaleDateString("en-US", { 
          year: 'numeric', month: 'long', day: 'numeric' 
        }) // Agar date invalid ho to aaj ki date dikhayega
  }
</div>

        {/* Large Clean Image */}
        {news.image && (
          <div className="news-hero-img">
            <img src={imageUrl} alt={news.title} />
          </div>
        )}

        {/* Pure Content - No Borders */}
        <div 
          className="news-text-content"
          dangerouslySetInnerHTML={{ __html: news.content }} 
        />
      </article>
    </div>
  );
};

export default NewsDetail;
