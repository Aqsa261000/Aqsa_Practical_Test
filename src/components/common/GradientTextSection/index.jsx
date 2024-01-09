import React from 'react';
import './gradientTextSection.css';
const GradientTextSection = (props) => {
  return (
    <div className="gradient-text-section-container">{props.children}</div>
  );
};

export default GradientTextSection;
