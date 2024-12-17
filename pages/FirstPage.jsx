import React from 'react';
import { useNavigate } from 'react-router-dom';
import LaptopSection from './LaptopSection';
import '../../App.css';

const FirstPage = () => {
  const navigate = useNavigate();

  const handleHpClick = () => {
    navigate('/HpPage');
  };

  const handleDellClick = () => {
    navigate('/DellPage');
  };

  return (
    <div className="split-screen-container">
      {/* Right: Laptops Section */}
      <LaptopSection
        handleHpClick={handleHpClick}
        handleDellClick={handleDellClick}
      />
    </div>
  );
};

export default FirstPage;
