import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      {/* HERO */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>
            Laghu Udyog Bharati Punjab
            Laghu Udyog Bharati (LUB) Punjab is the state chapter of the national-level premier MSME organization with a strong grassroots presence. It is dedicated to supporting and advocating for Micro, Small, and Medium Enterprises (MSMEs) pan-India. We are committed to the growth and empowerment of MSMEs, Small Scale Industries, and Cottage Industries by providing advocacy, policy support, networking opportunities, capacity building, and access to knowledge and resources.
          </p>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      {/* <div className="about-container">
        <div className="about-text">
          <h2>Our Philosophy</h2>
          <p>
            “Udyoga Hitah – Rashtra Hitah”
            (Industry’s Interest is Nation’s Interest)
            <p>We believe that when a small industry thrives, it empowers families, strengthens villages, and uplifts the nation. Our mission goes beyond profit—we build pride, preserve tradition, and spark innovation.</p>
          </p>

          <h2>What Makes Us Unique</h2>
          <p>
            <p>At Laghu Udyog Bharati, our strength lies not just in numbers but in our approach. We are a community built on values, driven by volunteers, and shaped by a vision where small industries power a strong and self-reliant Bharat. Here’s what sets Laghu Udyog Bharati apart in building Bharat’s industrial future:</p>
            <p>
              Volunteer-driven, professionally structured <br />
              Rooted in Indian ethos, aligned with global vision <br />
              Non-political, yet policy impactful <br />
              Decentralized in form, united in mission <br />
              Focused on real change, not just headlines
            </p>
          </p>

          <div className="about-stats">
            <div>
              <h3>10+</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>250+</h3>
              <span>Projects Completed</span>
            </div>
            <div>
              <h3>100+</h3>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img
            src="/public/img-2.jpg"
            alt="About Us"
          />
        </div>
      </div> */}

      {/* VALUES */}
      <div className="about-values">
       

        <div className="values-grid">
          <div className="value-card">
            <h3>Punjab State Leadership (2025–2026)</h3>
            <p>
              State President: Shri Pradeep Mongia <br />
              General Secretary: Shri Vivek Rathore <br />
              Senior Vice President: Seema Dhumal <br />
              Treasurer: Shri Puneet Gupta <br />
              Convenor: Amardeep Shergill
            </p>
          </div>

          <div className="value-card">
            <h3>Punjab State Office</h3>
            <p>
              Mongia & Co. (Mfg. Div.), Plot No. 1, Sector 8, Village Saidpura, Derabassi Barwala Road, Derabassi, Punjab. <br />
              Email:pardeepmongia13@gmail.com ; arvind.lub@gmail.com <br />
              Phone: 98140-61473 ; 92161-25258.
            </p>
          </div>



          <div className="value-card">
            <h3>Core Objectives and Activities</h3>
            <p>
              Policy Advocacy: Actively campaigns against "Inspector Raj" and pushes for a single-window clearance mechanism for NOCs in Punjab.

              Networking and Growth: Organizes monthly meetings and exhibitions, such as the "Swayam Siddha" exhibition for women entrepreneurs.

              Export Support: Authorised by the Government of India to issue Certificates of Origin to exporting units.

              Membership: Offers a 10-year membership for a fee of approximately ₹6,500. Registration can be initiated via the LUB Official Portal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
