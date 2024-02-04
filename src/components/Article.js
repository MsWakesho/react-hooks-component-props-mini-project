import React from 'react';

function Article({ title, date, preview }) {
  const minutesToRead = Math.ceil(preview.length / 100); 
  
  const emoji = minutesToRead <= 6 ? '☕️' : '🍱';

  return (
    <article>
      <h3>{title}</h3>
      <small>{date ? date : 'January 1, 1970'}</small>
      <p>{preview}</p>
      <small>{Array.from({ length: Math.ceil(minutesToRead / (minutesToRead <= 6 ? 5 : 10)) }, (_, index) => emoji).join(' ')}</small>
    </article>
  );
}

export default Article;
