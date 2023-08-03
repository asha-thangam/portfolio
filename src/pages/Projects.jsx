import React, { useState } from 'react';
import './Projects.css'; // Make sure to create a corresponding CSS file
import  img1 from '../images/chatApp.png'
import  img2 from '../images/blog.png'
import  img3 from '../images/random-quote.png'
import  img4 from '../images/cgpa-calc.png'

const projects = [
  {
    id: 1,
    title: 'Chatting Application',
    imageUrl: img1, // Replace with the actual image URL
    techs:'PHP, JavaScript, MySQL',
    github:'https://github.com/asha-thangam/Chat-App'
  },
  {
    id: 2,
    title: 'Blog Application',
    imageUrl: img2, // Replace with the actual image URL
    techs:'ReactJS',
    github:'https://github.com/asha-thangam/React-Blog/tree/main'
  },
  {
    id: 3,
    title: 'Random Quote Generator',
    imageUrl: img3, // Replace with the actual image URL
    techs:'ReactJS',
    github:'https://github.com/asha-thangam/random-quote-generator'
  },
  {
    id: 4,
    title: 'CGPA Calculator',
    imageUrl: img4, // Replace with the actual image URL
    techs:'HTML, CSS, JavaScript',
    github:'https://github.com/asha-thangam/CGPA-Calculator'
  },
  // Add more project objects here
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectPopup = (project) => {
    setSelectedProject(project);
  };

  const closeProjectPopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className='pro'>
    <h2>Projects</h2>
    <div className="portfolio" id="proj">
      {projects.map((project) => (
        <div className="project-card" key={project.id} onClick={() => openProjectPopup(project)}>
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          {/* <p>{project.description}</p> */}
        </div>
      ))}

      {selectedProject && (
        <div className="project-popup">
          <div className="popup-content">
            <button className="close-button" onClick={closeProjectPopup}>
              Close
            </button>
            <h2>{selectedProject.title}</h2>
            <p>Technologies Used: {selectedProject.techs}</p>
            <button><a href={selectedProject.github} target='_blank'>GitHub Link</a></button>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} />
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Projects;
