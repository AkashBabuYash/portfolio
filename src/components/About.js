import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      
      <h1 className="about-title">About Me</h1>

<div className="about-grid">
  <div className="about-card">
    <h3>Profile Summary</h3>
    <p>
      I am <strong>Akash Babu</strong>, a passionate <strong>Machine Learning Engineer   </strong> 
       currently pursuing <strong>B.Tech in Artificial Intelligence & Machine Learning </strong> 
      from SR Group of Institutions, Lucknow. I specialize in building 
      <strong> AI-powered solutions, chatbots, LLM applications, Agentic AI systems, 
      Generative AI apps, and MERN stack projects</strong>.
    </p>
  </div>

  <div className="about-card">
    <h3>Goals & Vision</h3>
    <p>
      My future goal is to become an <strong>AI Researcher</strong> contributing to 
      advancements in <strong>Large Language Models, Agentic AI, and automation systems</strong>.  
      I also plan to build my own <strong>AI startup</strong> that brings practical AI solutions 
      to businesses and society.
    </p>
  </div>

  <div className="about-card">
    <h3>Strengths & Activities</h3>
    <p>
      I participated in a college hackathon and enjoy tackling challenging problems.  
      My <strong>problem-solving skills</strong>, <strong>quick learning</strong>, and habit of reading 
      <strong> research papers, documentation, and AI blogs</strong> keep me up-to-date with the latest innovations.
    </p>
  </div>
</div>



      <div className="about-container">

        <div className="about-box">
          <h2>Education</h2>
          <ul>
            <li>B.Tech in AI & ML — SR Group of Institutions, Lucknow</li>
            <li>Intermediate — Lucknow Convent Public Inter College</li>
            <li>High School — Lucknow Convent Public Inter College</li>
          </ul>
        </div>

        <div className="about-box">
          <h2>Projects</h2>
          <ul>
            <li>Chest X-ray Classification (CNN)</li>
            <li>Resume Classifier (ML/NLP)</li>
            <li>Wine Quality Detection</li>
            <li>Spam Detection System</li>
            <li>Generative AI Chatbot</li>
            <li>Agentic AI Assistant</li>
            <li>RAG Based Application</li>
          </ul>
        </div>

        <div className="about-box ">
          <h2>Languages</h2>
          <ul>
            <li>English — Good</li>
            <li>Hindi — Native</li>
          </ul>
        </div>

      </div>

      
      <footer className="about-footer">
        <h1>Contact me :</h1>
        <p>📧 Email: <a href="mailto:babuakash43168@gmail.com">babuakash43168@gmail.com</a></p>
        <p>📞 Phone: <a href="tel:+918318628430">8318628430</a></p>
      </footer>

    </section>
  );
};

export default About;
