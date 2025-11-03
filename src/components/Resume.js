import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume-section">

      <h1 className="resume-title">My Resume</h1>

      {/* 📄 Download Resume */}
      <a href="/icons/Resume2.docx" download="Resume.docx" className="download-btn">
        Download Resume
      </a>

      <div className="resume-objective resume-box">
        <h2>Career Objective</h2>
        <p>
          To secure a position as an AI/ML Engineer or Full Stack Developer 
          where I can apply my technical knowledge to build real-world 
          intelligent solutions and contribute to innovative AI research.
        </p>
      </div>

      <div className="divider-accent"></div>

      {/* ✅ Resume Grid */}
      <div className="resume-grid">

        {/* 🔧 Skills */}
        <div className="resume-box">
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>AI/ML:</strong> Deep Learning, CNN, NLP, RAG, LLMs, Agentic AI</li>
            <li><strong>Programming:</strong> Python, Java, JavaScript</li>
            <li><strong>Frameworks:</strong> TensorFlow, Keras, PyTorch, React, Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB, MySQL</li>
            <li><strong>Tools:</strong> VS Code, GitHub, Firebase, Streamlit</li>
          </ul>
        </div>

        {/* ⭐ Projects */}
        <div className="resume-box">
          <h2>Featured Projects</h2>
          <ul>
            <li>Chest X-Ray Classification (DL - CNN)</li>
            <li>Resume Classification using NLP</li>
            <li>Generative AI Chatbot</li>
            <li>Food Recommendation System (ML)</li>
          </ul>
        </div>

        {/* 🎓 Education */}
        <div className="resume-box">
          <h2>Education</h2>
          <ul>
            <li>B.Tech in AI & ML — SR Group of Institutions, Lucknow</li>
            <li>Intermediate — Lucknow Convent Public Inter College</li>
            <li>High School — Lucknow Convent Public Inter College</li>
          </ul>
        </div>

        {/* 🏆 Additional */}
        <div className="resume-box">
          <h2>Achievements</h2>
          <ul>
            <li>Hackathon Participation</li>
            <li>7+ AI Projects Completed</li>
            <li>Strong Problem-Solving Skills</li>
          </ul>
        </div>

      </div>

      {/* ✅ Footer */}
      <footer className="resume-footer">
        <p>📧 <a href="mailto:babuakash43168@gmail.com">babuakash43168@gmail.com</a></p>
        <p>📞 <a href="tel:+918318628430">8318628430</a></p>
      </footer>

    </section>
  );
};

export default Resume;
