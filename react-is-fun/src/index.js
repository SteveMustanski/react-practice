import React from 'react';
import { render } from 'react-dom';
import Proptypes from 'prop-types';
import { Library } from './Library';

let bookList = [
  {
    title: 'Atlas Shrugged',
    author: 'Ayn Rand',
    pages: 1200,
  },
  {
    title: 'Hitchikers Guide to the Galaxy',
    author: 'Douglas Adams',
    pages: 350,
  },
  {
    title: 'The Lord of the Rings',
    author: 'JRR Tolkein',
    pages: 732,
  },
];

Library.propTypes = {
  books: Proptypes.array,
};

render(<Library books={bookList} />, document.getElementById('root'));
