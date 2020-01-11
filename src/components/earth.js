import React from 'react';
import earth from "../images/earth.svg";
import cloud_1 from "../images/cloud_1.svg";
import cloud_2 from "../images/cloud_2.svg";


const Earth = () => (
  <div className="earth-container">
    <img src={cloud_1} alt="cloud_1" className="cloud_1" />
    <img src={cloud_2} alt="cloud_2" className="cloud_2" />
    <img src={earth} alt="earth" className="earth-img" />
  </div>
)

export default Earth
