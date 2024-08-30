import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-container">
        <h2 className="about-me-title">About Me</h2>
        <div className="about-me-content">
          <img
            src="your-image-url.jpg" // Replace with your actual image path
            alt="Your Name"
            className="about-me-image"
          />
          <div className="about-me-text">
            <p>
              Hi, I'm [Your Name], a passionate web developer with expertise in 
              both front-end and back-end technologies. I love creating beautiful 
              and functional websites that provide an exceptional user experience.
            </p>
            <p>
              My journey started [X years/months ago] when I began learning 
              programming. Since then, I have worked on numerous projects, honing 
              my skills in HTML, CSS, JavaScript, React, Node.js, and more.
            </p>
            <p>
              In my free time, I enjoy [your hobbies], and I'm always eager to 
              learn new things and take on challenging projects.
            </p>
            <p>
              If you'd like to connect or work together, feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
