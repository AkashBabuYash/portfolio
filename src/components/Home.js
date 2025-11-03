import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <div>
      
    <section className="home">
      <div className="home-left">
        <h3 className="role">Artificial Intelligence Engineer and Mern Stack Developer</h3>
        <h1 className="intro">Hello I'm</h1>
        <h1 className="name">Akash Babu</h1>
        <p className="description">
          I'm a Machine Learning & Deep Learning Engineer and MERN Stack Developer.  
          Passionate about building AI-powered solutions and smart web applications.
        </p>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/akash-babu-31287a2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin.jpg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/AkashBabuYash" target="_blank" rel="noreferrer">
            <img src="/icons/github.png" alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/akashbabu2741?igsh=YnM4cnVjYTMxNTJj" target="_blank" rel="noreferrer">
            <img src="/icons/instagram.jpg" alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="home-right">
        <img
          className="profile-img"
          src="/icons/719c61fc-8911-4216-8b8b-1ee0de6e721e.jpg"
          alt="Akash"
        />
      </div>
  
    </section>
    <div className="section-divider"></div>
   <section className="skills-section">
  <h1 className="skills-title">Skills</h1>

  <div className="skills-container">
    
    <div className="skill-card">
      <img src="/icons/ml.jpg" alt="Machine Learning" />
      <h3>Machine Learning</h3>
    </div>

    <div className="skill-card">
      <img src="/icons/dl.png" alt="Deep Learning" />
      <h3>Deep Learning</h3>
    </div>

    <div className="skill-card">
      <img src="/icons/gen.jpg" alt="Generative AI" />
      <h3>Generative AI</h3>
    </div>

    <div className="skill-card">
      <img src="/icons/agent.jpg" alt="Agentic AI" />
      <h3>Agentic AI</h3>
    </div>

    <div className="skill-card">
      <img src="/icons/mern.jpg" alt="MERN Stack" />
      <h3>MERN Stack</h3>
    </div>

    <div className="skill-card">
      <img src="/icons/java.jpg" alt="DSA in Java" />
      <h3>DSA in Java</h3>
    </div>
  

 

  </div>
</section>
 <div className="section-divider"></div>
<section className="hackathon-section">
  <div className="hackathon-card left-card">
    <h1>Hackathon Participation</h1>
    <h2>Certificate</h2>
    <img src="/icons/979dabc4-09f9-4233-86c0-47389ef1cbd6.jpg" alt="Hackathon Certificate" />
  </div>

  <div className="hackathon-card right-card">
    <h1>My Team</h1>
    <img src="/icons/9c55cca9-8104-4a1a-8c9c-ffaec236eb89.jpg" alt="Team" />


  </div>
</section>

<footer>
  <h1>Contact me :</h1>
    <h1>email:babuakash43168@gmail.com</h1>
    <h1>phone number:8318628430</h1>
</footer>

    </div>
  );
};

export default Home;
