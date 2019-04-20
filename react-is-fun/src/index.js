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

const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>by {author}</p>
      <p>pages: {pages}</p>
      <p>Free Bookmark today: {freeBookmark ? 'yes!' : 'no.'}</p>
    </section>
  );
};

const Hiring = () => {
  return (
    <div>
      <p>The library is hiring. Check careers link for more information.</p>
    </div>
  );
};

const NotHiring = () => {
  return (
    <div>
      <p>The library is not hiring. Check back later.</p>
    </div>
  );
};

class Library extends Component {
  state = {
    open: true,
    freeBookmark: true,
    hiring: true,
  };

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  render() {
    const books = this.props.books;
    return (
      <div>
        <h1>The library is {this.state.open ? 'open' : 'closed'}.</h1>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        <button onClick={this.toggleOpenClosed}>
          {this.state.open ? 'Close Library' : 'Open Library'}
        </button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
          />
        ))}
      </div>
    );
  }
}

render(<Library books={bookList} />, document.getElementById('root'));
