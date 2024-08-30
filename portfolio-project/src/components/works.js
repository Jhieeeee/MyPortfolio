import React from 'react';

const Works = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of the first project.',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      title: 'Project Two',
      description: 'A brief description of the second project.',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      title: 'Project Three',
      description: 'A brief description of the third project.',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    // Add more projects as needed
  ];

  return (
    <section id="works" className="works-section">
      <div className="container">
        <h2 className="section-title">Works</h2>
        <div className="works-content">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <img className="project-image" src={project.image} alt={project.title} />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
