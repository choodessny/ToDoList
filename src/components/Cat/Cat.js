import { useState, useEffect } from "react";
import img from "../../resources/cit.png";

const STEP_LENGTH = 3;

const Cat = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const [step, setStep] = useState(1000);
  const [animation, setAnimation] = useState(false);
  const [moveStep, setMoveStep] = useState(200);

  useEffect(() => {
    if (animation) {
      const timeout = setTimeout(() => setAnimation(false), 200);
      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setAnimation(Math.random() > 0.8), 200);
    return () => setInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(Math.round(500 + Math.random() * 1000));
      setAngle((oldAngle) => oldAngle + -200 + Math.round(Math.random() * 400));
    }, step);
    return () => clearInterval(interval);
  }, [step]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoords((oldCoords) => {
        const newX =
          oldCoords.x + STEP_LENGTH * Math.cos(angle * (Math.PI / 180));
        const newY =
          oldCoords.y + STEP_LENGTH * Math.sin(angle * (Math.PI / 180));
        return {
          x: Math.min(90, Math.max(0, newX)),
          y: Math.min(90, Math.max(0, newY)),
        };
      });
    }, moveStep);
    return () => clearInterval(interval);
  }, [angle, moveStep]);

  return (
    <div
      className="cat-container"
      style={{ transform: `translate(${coords.x}vw, ${coords.y}vh)` }}
    >
      <img className={`cat ${animation && "animation"}`} src={img} />
    </div>
  );
};

export default Cat;
