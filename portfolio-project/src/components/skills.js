import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          <div className="skill-item">
            <h3 className="skill-title">JavaScript</h3>
            <p className="skill-description">Proficient in ES6+ features, asynchronous programming, and front-end frameworks.</p>
          </div>
          <div className="skill-item">
            <h3 className="skill-title">Java</h3>
            <p className="skill-description">Experienced with core Java, object-oriented programming, and enterprise-level applications.</p>
          </div>
          <div className="skill-item">
            <h3 className="skill-title">React</h3>
            <p className="skill-description">Skilled in building interactive UIs, component-based architecture, and state management.</p>
          </div>
          <div className="skill-item">
            <h3 className="skill-title">CSS</h3>
            <p className="skill-description">Strong understanding of layout techniques, responsive design, and modern CSS frameworks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
