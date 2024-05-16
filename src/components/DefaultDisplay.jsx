import React from 'react';
import img from '../assets/mars.png';

function DefaultDisplay() {
  return (
    <div className="rover_container">
      <div className="rover_section_img">
        <img src={img} className="mars_illus" alt="Mars" />
      </div>
      <div className="rover_section_text">
        <p className="rover_section_para">Welcome to an extraordinary adventure into the Martian landscape, where we invite you to explore the wonders of the Red Planet through the lens of various rovers that have traversed its surface. Our journey takes us deep into the photographic archives, a treasure trove of captivating images captured by these robotic explorers. Each rover, armed with sophisticated cameras, has documented the Martian terrain, unveiling its mysteries one snapshot at a time.
          The heart of this exploration lies in a comprehensive database meticulously organized to offer you an unparalleled visual chronicle of Mars' exploration. This repository is a testament to the marvels of technology and the spirit of scientific curiosity that drives humanity to push the boundaries of exploration.
          But how do you, the explorer, access this vast collection? Fear not, for we present a user-friendly approach that allows you to effortlessly navigate through the visual wonders of Mars. By simply entering the Earth date corresponding to a specific photo, you unlock a portal to the Red Planet's past, witnessing moments frozen in time by the lenses of our robotic companions.
          The convenience of this method provides unparalleled flexibility, enabling you to tailor your exploration based on your interests. Whether you're drawn to the intricate geological formations that dot the Martian surface, mesmerized by the dance of atmospheric phenomena in the thin Martian air, or captivated by the milestones achieved by the rovers themselves, our immersive experience ensures that your curiosity is rewarded.
          This journey offers a deeper understanding of Mars' unique features and the scientific endeavors that drive these robotic explorers. From the striking landscapes to the subtle details that tell the story of a planet's evolution, each image contributes to our collective knowledge of the Red Planet.
          Join us in unlocking the mysteries of Mars as we navigate through the cutting-edge technology and unparalleled exploration that has brought us face to face with the enigmatic Red Planet.
        </p>
      </div>
    </div>
  );
}

export default DefaultDisplay;
