import React, { Component } from 'react';
import { render } from 'react-dom';

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

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>by {author}</p>
      <p>pages: {pages}</p>
    </section>
  );
};

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }
  render() {
    console.log(this.state);
    const books = this.props.books;
    return (
      <div>
        <h1>The library is {this.state.open ? 'open' : 'closed'}.</h1>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
          />
        ))}
      </div>
    );
  }
}

render(<Library books={bookList} />, document.getElementById('root'));
