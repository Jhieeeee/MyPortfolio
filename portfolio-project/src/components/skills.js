import React from 'react';


const Skills = () => {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skills-column">
          <h3>Coding skills</h3>
          <Skill name="JavaScript" level="86%" />
          <Skill name="PHP" level="80%" />
          <Skill name="HTML + CSS" level="100%" />
          <Skill name="Java" level="70%" />
        </div>
        <div className="skills-column">
          <h3>Design Skills</h3>
          <Skill name="UI / UX Design" level="92%" />
          <Skill name="Web Design" level="99%" />
          <Skill name="Logo Design" level="79%" />
        </div>
      </div>
    </section>
  );
};

const Skill = ({ name, level }) => {
  return (
    <div className="skill">
      <p>{name}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: level }}>
          {level}
        </div>
      </div>
    </div>
  );
};

export default Skills;
