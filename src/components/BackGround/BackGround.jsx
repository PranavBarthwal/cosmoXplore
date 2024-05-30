import { Canvas, useFrame } from "@react-three/fiber";
import Styles from "./BackGround.module.css"
import { useRef, useState, useEffect, useCallback } from "react";


function Star({ position }) {
  const radius = 0.005;
  return (
    <mesh position={position}>
      <sphereGeometry args={[radius, 16, 16]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

function StarField({ numberOfStars = 100 }) {

  const starFieldRef = useRef();

  useFrame((state, delta) => {
    starFieldRef.current.rotation.x += -0.001
    starFieldRef.current.rotation.y += 0.002
  })

  const [positions, setPositions] = useState([])

  const addStars = useCallback(() => {
    const starsPosition = [];
    for (let i = 0; i < numberOfStars; i++) {
      let x = (Math.random() * 2 - 1) * 10; // Ensure x is within -5 to 5 range
      let y = (Math.random() * 2 - 1) * 10; // Ensure y is within -5 to 5 range
      let z = (Math.random() * 2 - 1) * 4; // Ensure z is within -5 to 5 range
      starsPosition.push([x, y, z]);
    }
    setPositions((prev) => [...starsPosition]);
  }, [numberOfStars])

  useEffect(addStars, []);
  return (
    <group ref={starFieldRef} rotation={[0, 0, 1]}>
      {
        positions.map((position, index) => (
          <Star key={index} position={position} />
        ))
      }
    </group>
  )
}


function Background() {

  return (
    <div id={Styles['container']}>
      <Canvas id={Styles['background']} camera={{ fov: 80, position: [0, 0, 7] }} >
        <ambientLight intensity={1} />
        <StarField numberOfStars={5000} />
      </Canvas>
    </div>
  );
}

export default Background;
