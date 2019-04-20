import React from 'react';
import { render } from 'react-dom';

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>by {author}</p>
      <p>pages: {pages}</p>
    </section>
  );
};

const Library = () => {
  return <Book title='Atlas Shrugged' author='Ayn Rand' pages={1200} />;
};

render(<Library />, document.getElementById('root'));
