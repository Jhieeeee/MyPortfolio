import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-us">
      <h2>ABOUT MY WORKS</h2>
      <p className="goal">MY GOAL IS TO BUILD PRODUCTS AND SERVICES</p>

      <div className="services">
        <div className="service">
          <div className="icon">
            <i className="fas fa-laptop"></i>  {/* Icon for Web Design */}
          </div>
          <h3>WEB DESIGN</h3>
          <p>
            Our approach to website design is to create a website that strengthens 
            your company’s brand while ensuring ease of use and simplicity for your audience.
          </p>
        </div>

        <div className="service">
          <div className="icon">
            <i className="fas fa-code"></i>  {/* Icon for Web Development */}
          </div>
          <h3>WEB DEVELOPMENT</h3>
          <p>
            The web development process involves taking graphical elements defined in 
            the design process and coding them into a custom theme.
          </p>
        </div>

        <div className="service">
          <div className="icon">
            <i className="fas fa-search"></i>  {/* Icon for SEO */}
          </div>
          <h3>SEO OPTIMIZATION</h3>
          <p>
            Go farther than you thought you could. With us, you can go farther than 
            ever before. Be in top results of searches.
          </p>
        </div>

        <div className="service">
          <div className="icon">
            <i className="fas fa-share-alt"></i>  {/* Icon for Social Media */}
          </div>
          <h3>SOCIAL MEDIA</h3>
          <p>
            It's important to keep your brand consistent and recognizable across all platforms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
