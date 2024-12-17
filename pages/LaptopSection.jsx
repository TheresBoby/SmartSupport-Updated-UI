import React from 'react';

const laptops = [
  { name: 'HP', imgSrc: '/images/hpimage.jpg', onClick: 'handleHpClick' },
  { name: 'DELL', imgSrc: '/images/dellimage.avif', onClick: 'handleDellClick' },
  { name: 'ASUS', imgSrc: '/images/asus.jpg' },
  { name: 'SAMSUNG', imgSrc: '/images/samsung.jpg' },
  { name: 'APPLE', imgSrc: '/images/apple.webp' },
];

const LaptopSection = ({ handleHpClick, handleDellClick }) => {
  const clickHandlers = { handleHpClick, handleDellClick };

  return (
    <div className="right-screen">
      <header className="header">
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
          <button className="search-button">🔍</button>
        </div>
        <div className="user-cart-icons">
          <button className="user-icon">👤</button>
          <button className="cart-icon">🛒</button>
        </div>
      </header>

      <section className="laptop-carousel-section">
        {laptops.map((laptop) => (
          <div
            key={laptop.name}
            className="laptop-item"
            onClick={laptop.onClick ? clickHandlers[laptop.onClick] : null}
          >
            <img src={laptop.imgSrc} alt={laptop.name} />
            <p>{laptop.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LaptopSection;
