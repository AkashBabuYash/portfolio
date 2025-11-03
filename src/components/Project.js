import React from "react";
import "./Project.css";

const projectData = [
  {
    title: "Pneumonia Detection",
    link: "https://github.com/yourproject1",
    images: ["/icons/a.png", "/icons/1.png", "/icons/2.png", "/icons/3.png", "/icons/4.png", "/icons/5.png", "/icons/6.png", "/icons/7.png"]
  },
  {
    title: "Search Engine",
    link: "https://github.com/yourproject2",
    images: ["/icons/g1.png", "/icons/g2.png", "/icons/g1.png", "/icons/g2.png", "/icons/g1.png", "/icons/g2.png", "/icons/g1.png", "/icons/g2.png"]
  },
  {
    title: "Polynomial Regression on TSLA Dataset",
    link: "#",
    images: ["/icons/p1.png", "/icons/p2.png", "/icons/p3.png", "/icons/p4.png", "/icons/p5.png", "/icons/p1.png", "/icons/p2.png", "/icons/p3.png"]
  },
  {
    title: "Resume Analyzer",
    link: "#",
    images: ["/icons/ra.png", "/icons/r1.png", "/icons/ra.png", "/icons/r1.png", "/icons/ra.png", "/icons/r1.png", "/icons/ra.png", "/icons/r1.png"]
  },
  {
    title: "Chatting Project",
    link: "#",
    images: ["/icons/ca.jpg", "/icons/c1.jpg", "/icons/c2.jpg", "/icons/ca.jpg", "/icons/c1.jpg", "/icons/c2.jpg", "/icons/ca.jpg", "/icons/c1.jpg"]
  },
  {
    title: "Data Visualization",
    link: "#",
    images: ["/icons/da.jpg", "/icons/d1.jpg", "/icons/d3.jpg", "/icons/da.jpg", "/icons/d1.jpg", "/icons/d3.jpg", "/icons/da.jpg", "/icons/d1.jpg"]
  },
  {
    title: "Wine Quality Detection",
    link: "#",
    images: ["/icons/wa.jpg", "/icons/w1.jpg", "/icons/w2.jpg", "/icons/wa.jpg", "/icons/w1.jpg", "/icons/w2.jpg", "/icons/wa.jpg", "/icons/w1.jpg"]
  },
  {
    title: "Heart Failure Prediction",
    link: "#",
    images: ["/icons1/anna.png", "/icons1/ann1.png", "/icons1/ann2.png", "/icons1/ann3.png", "/icons1/ann4.png", "/icons1/ann5.png", "/icons1/anna.png", "/icons1/ann1.png"]
  },
  {
    title: "Credit Card Fraud Clustering",
    link: "#",
    images: ["/icons1/clusterdbscana.png", "/icons1/clusterdbscan1.png", "/icons1/clusterdbscan2.png", "/icons1/clusterdbscana.png", "/icons1/clusterdbscan1.png", "/icons1/clusterdbscan2.png", "/icons1/clusterdbscana.png", "/icons1/clusterdbscan1.png"]
  },
  {
    title: "Credit Card Fraud Detection",
    link: "#",
    images: ["/icons1/credita.png", "/icons1/credit1.png", "/icons1/credit2.png", "/icons1/credit3.png", "/icons1/credit4.png", "/icons1/credita.png", "/icons1/credit1.png", "/icons1/credit2.png"]
  },
  {
    title: "Big Mart Sales Clustering",
    link: "#",
    images: ["/icons1/hiera.png", "/icons1/hier1.png", "/icons1/hier2.png", "/icons1/hier3.png", "/icons1/hier4.png", "/icons1/hier5.png", "/icons1/hier6.png", "/icons1/hiera.png"]
  },
  {
    title: "Image Classification using ResNet50",
    link: "#",
    images: ["/icons1/inbuilda.png", "/icons1/inbuild1.png", "/icons1/inbuild2.png", "/icons1/inbuilda.png", "/icons1/inbuild1.png", "/icons1/inbuild2.png", "/icons1/inbuilda.png", "/icons1/inbuild2.png"]
  },
  {
    title: "Mall Customer Clustering",
    link: "#",
    images: ["/icons1/kmeansa.png", "/icons1/kmeans1.png", "/icons1/kmeans2.png", "/icons1/kmeans3.png", "/icons1/kmeans4.png", "/icons1/kmeans5.png", "/icons1/kmeans6.png", "/icons1/kmeansa.png"]
  },
  {
    title: "Spam Detection",
    link: "#",
    images: ["/icons1/knna.png", "/icons1/knn1.png", "/icons1/knn2.png", "/icons1/knn3.png", "/icons1/knna.png", "/icons1/knn1.png", "/icons1/knn2.png", "/icons1/knn3.png"]
  },
  {
    title: "Next Word Prediction",
    link: "#",
    images: ["/icons1/lstma.png", "/icons1/lstm1.png", "/icons1/lstm2.png", "/icons1/lstma.png", "/icons1/lstm1.png", "/icons1/lstm2.png", "/icons1/lstma.png", "/icons1/lstm1.png"]
  },
  {
    title: "AC Power Consumption Prediction",
    link: "#",
    images: ["/icons1/ridgea.png", "/icons1/ridgea.png", "/icons1/ridgea.png", "/icons1/ridgea.png", "/icons1/ridgea.png", "/icons1/ridgea.png", "/icons1/ridgea.png", "/icons1/ridgea.png"]
  }
];

const Projects = () => {
  return (
    <div className="projects-page">
      <section className="projects-section">
        <h1 className="projects-title">My Projects</h1>

        <div className="projects-container">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              
              <div className="left">
                <h2>{project.title}</h2>
                <a href={project.link} target="_blank" className="project-btn" rel="noreferrer">
                  Watch Project
                </a>
              </div>

              <div className="right slider">
                <div className="slide-track">
                  {project.images.map((img, i) => (
                    <img key={i} src={img} alt={project.title} />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      <footer className="about-footer">
        <h1>Contact me :</h1>
        <p>📧 Email: <a href="mailto:babuakash43168@gmail.com">babuakash43168@gmail.com</a></p>
        <p>📞 Phone: <a href="tel:+918318628430">8318628430</a></p>
      </footer>

    </div>
  );
};

export default Projects;
