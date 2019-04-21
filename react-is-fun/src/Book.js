import React from 'react';
import Proptypes from 'prop-types';

export const Book = ({
  title = 'No Title',
  author = 'No author',
  pages = 0,
  freeBookmark,
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>by {author}</p>
      <p>pages: {pages}</p>
      <p>Free Bookmark today: {freeBookmark ? 'yes!' : 'no.'}</p>
    </section>
  );
};

Book.propTypes = {
  title: Proptypes.string,
  author: Proptypes.string,
  pages: Proptypes.number,
  freeBookmark: Proptypes.bool,
};
