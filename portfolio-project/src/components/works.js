import React from 'react';

const worksData = [
  {
    id: 1,
    title: 'Fringilla sit amet',
    description: 'Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.',
    image: 'path-to-image1.jpg'
  },
  {
    id: 2,
    title: 'Nulla scelerisque',
    description: 'Proin pharetra metus id iaculis dignissim. In aliquet lorem.',
    image: 'path-to-image2.jpg'
  },
  {
    id: 3,
    title: 'Vivamus vestibulum',
    description: 'Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis.',
    image: 'path-to-image3.jpg'
  }
];

const Works = () => {
  return (
    <section className="works">
      <div className="works-header">
        <h2>Works</h2>
        <p>
          Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies, nisl nunc pulvinar ligula, id sodales arcu sapien in nisi. Quisque libero enim, mattis non augue posuere.
        </p>
      </div>

      <div className="works-list">
        {worksData.map((work, index) => (
          <div className="work-item" key={work.id}>
            <div className="image-container">
              <img src={work.image} alt={work.title} />
            </div>
            <div className="work-details">
              <span>{`00${index + 1}/006`}</span>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <button className="discover-btn">Discover</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
