import React, { Component } from 'react';
import { render } from 'react-dom';

let hundredCodeDays = {
  total: 66,
  react: 40,
  js: 16,
  node: 10,
  goal: 100,
};

const getPercent = decimal => {
  return decimal * 100 + '%';
};

const getGoalProgress = (total, goal) => {
  return getPercent(total / goal);
};

const DevDayCounter = ({ total, react, js, node, goal }) => {
  return (
    <section>
      <h1>Hundred Days of Code</h1>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>Total React Days: {react}</p>
      </div>
      <div>
        <p>Total JS Days: {js}</p>
      </div>
      <div>
        <p>Total Node Days: {node}</p>
      </div>
      <div>
        <p>Goal Progress: {getGoalProgress(total, goal)}</p>
      </div>
    </section>
  );
};

render(
  <DevDayCounter
    total={hundredCodeDays.total}
    react={hundredCodeDays.react}
    js={hundredCodeDays.js}
    node={hundredCodeDays.node}
    goal={hundredCodeDays.goal}
  />,
  document.getElementById('root'),
);
