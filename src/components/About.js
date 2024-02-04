import React from 'react';

function About({ about,image='https://via.placeholder.com/215' ,title="blog logo" }) {


  return (
    <aside>
      <img src={image} alt={title} />
      <p>{about}</p>
    </aside>
  );
}

export default About;
