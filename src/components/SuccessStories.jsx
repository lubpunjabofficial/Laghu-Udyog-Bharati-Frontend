import "./SuccessStories.css";

const stories = [
  {
    id: 1,
    name: "Ashutosh Gokhale",
    company: "Oilmax Systems Pvt. Ltd.",
    image: "/photo-2.png",
    description:
      "Oilmax Systems Pvt. Ltd., founded by Ashutosh Gokhale, began with a single innovative product and has grown into a global leader in oil and coolant conservation."
  },
  {
    id: 2,
    name: "Manjula Mishra",
    company: "Holosafe Security Labels Pvt. Ltd.",
    image: "/photo-2.png",
    description:
      "Manjula Mishra founded Holosafe Security Labels and grew the company into a leading manufacturer of holograms and security labels across India."
  },
  {
    id: 3,
    name: "Shri Jitender Aggarwal",
    company: "Aggcon Equipments International Pvt. Ltd.",
    image: "/photo-2.png",
    description:
      "Founded in 2003, AGGCON is a top infrastructure equipment rental company with operations across India."
  }
];

const SuccessStories = () => {
  return (
    <section className="success-section">
      <h2>Featured Member Success Stories</h2>

      <div className="success-row">
        {stories.map((story) => (
          <div
            key={story.id}
            className="story-card"
            style={{ backgroundImage: `url(${story.image})` }}
          >
            <div className="story-content">
              <h3>{story.name}</h3>
              <h4>{story.company}</h4>
              <p>{story.description}</p>
            </div>
          </div>
        ))}
      </div>

      <a className="view-more" href="#">View More...</a>
    </section>
  );
};

export default SuccessStories;
