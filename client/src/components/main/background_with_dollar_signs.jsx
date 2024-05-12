import React from 'react';

const BackgroundWithDollarSigns = () => {
  const generateDollarSigns = () => {
    const signs = [];
    for (let i = 0; i < 100; i++) {
      signs.push(
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 15 + 10}px`,
            color: 'rgba(0, 255, 0, 0.4)'
          }}
        >
          $
        </div>
      );
    }
    return signs;
  };

  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    >
      {generateDollarSigns()}
    </div>
  );
};

export default BackgroundWithDollarSigns;
