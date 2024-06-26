import React from 'react';
const robot = '/resources/robotsimulation/robot.png';

const Robot = ({ position }) => {
  return (
    <div
      className="robot"
      style={{
        left: position.x * 50 - 10,
        top: position.y * 50 - 25,
      }}>
      <img src={process.env.PUBLIC_URL + robot} alt="robot" />
    </div>
  );
};

export default Robot;
