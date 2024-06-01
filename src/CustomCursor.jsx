import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const colors = [
  '#0a49bd',
  '#012e82',
  '#042b6f',
  '#4d2be5',
  '#0915c3',
  '#958cdc',
  '#010101',
  '#080e63',
  '#5010ff',
  '#460cc3',
  '#311671',
  '#4e3ab3',
  '#4f3f68',
  '#181ecd',
  '#302a42',
  '#003283',
  '#3b17d7',
  '#180068',
  '#0b3687',
];

const colorAnimation = keyframes`
  0% { background-color: ${colors[0]}; }
  5% { background-color: ${colors[1]}; }
  10% { background-color: ${colors[2]}; }
  15% { background-color: ${colors[3]}; }
  20% { background-color: ${colors[4]}; }
  25% { background-color: ${colors[5]}; }
  30% { background-color: ${colors[6]}; }
  35% { background-color: ${colors[7]}; }
  40% { background-color: ${colors[8]}; }
  45% { background-color: ${colors[9]}; }
  50% { background-color: ${colors[10]}; }
  55% { background-color: ${colors[11]}; }
  60% { background-color: ${colors[12]}; }
  65% { background-color: ${colors[13]}; }
  70% { background-color: ${colors[14]}; }
  75% { background-color: ${colors[15]}; }
  80% { background-color: ${colors[16]}; }
  85% { background-color: ${colors[17]}; }
  90% { background-color: ${colors[18]}; }
  95% { background-color: ${colors[19]}; }
  100% { background-color: ${colors[0]}; }
`;

const CircleContainer = styled.div`
  position: fixed;
  z-index: 10000;
  pointer-events: none;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  animation: ${colorAnimation} 5s infinite;
  opacity: ${props => props.scale};

  &::before {
    content: '';
    position: fixed;
    width: 50px;
    height: 50px;
    opacity: 0.2;
    transform: translate(-30%, -30%);
    border-radius: 50%;
  }
`;

const CustomCursor = () => {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const circleRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateCircles = () => {
      const circles = circleRefs.current;
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        const nextCircle = circles[index + 1] || circles[0];
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.scale = (circles.length - index) / circles.length;

        x += (nextCircle.style.left.replace('px', '') - x) * 0.3;
        y += (nextCircle.style.top.replace('px', '') - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, [coords]);

  const circles = Array.from({ length: 20 }, (_, i) => (
    <Circle
      key={i}
      ref={(el) => (circleRefs.current[i] = el)}
      scale={(20 - i) / 20}
    />
  ));

  return <CircleContainer>{circles}</CircleContainer>;
};

export default CustomCursor;