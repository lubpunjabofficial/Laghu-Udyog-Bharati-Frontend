import "./Podcast.css";

const videos = [ 
  { id: 1, youtubeId: "gO24A-NyZm0?si=Qs8bmmjZXciQIYck",  },
  { id: 2, youtubeId: "EUMEi8RhZNg?si=Ok7GmqY1guHm3UNu",  },
  { id: 3, youtubeId: "mLB3kchKfQQ?si=-fRUFSDPHKdD",  },
  
];


const Podcast = () => {
  return (
    <section className="podcast-section">
        <h2 >LUB Podcast - MSME Startup t20</h2>
      <div className="podcast-row">
        {videos.map((video) => (
          <div className="podcast-col" key={video.id}>
            <div className="podcast-card">
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>
              <p>{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Podcast;
