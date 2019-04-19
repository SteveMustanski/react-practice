import React from 'react';
import ReactDOM from 'react-dom';

let style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Ariel',
};

const title = React.createElement(
  'h1',
  { id: 'title', className: 'header', style },
  'Hello World!',
);

ReactDOM.render(title, document.getElementById('root'));
