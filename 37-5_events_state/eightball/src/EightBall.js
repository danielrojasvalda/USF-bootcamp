import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    setMsg(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  const resetBall = () => {
    setMsg("Think of a Question");
    setColor("black");
  };

  return (
    <div className="EightBall-container">
      <div
        className="EightBall"
        style={{ backgroundColor: color }}
        onClick={getRandomAnswer}
      >
        <p>{msg}</p>
      </div>
      <button onClick={resetBall}>Reset</button>
    </div>
  );
};

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    // ... (other default answers)
  ],
};

export default EightBall;
