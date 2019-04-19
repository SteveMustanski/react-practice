import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Everyone!</h1>
        <p style={{ color: this.props.color }}>{this.props.msg}</p>
        <p>I will check back in {this.props.minutes} minutes.</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Message color='blue' msg='How are you?' minutes={5} />,
  document.getElementById('root'),
);
