// Stars.tsx
import React, { useEffect, useState } from 'react';
import styles from './stars.module.css'; // Adjust the path to your CSS module

const Stars = () => {
  const numStars = 50; // Adjust this number to control the number of stars
  const numFallingStars = 10; // Adjust this number to control the number of falling stars
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const generateRandomPosition = (max: number) => {
    return isClient ? Math.floor(Math.random() * max) + 'px' : '0px';
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      const style = {
        top: generateRandomPosition(isClient ? window.innerHeight : 0),
        left: generateRandomPosition(isClient ? window.innerWidth : 0),
      };
      stars.push(<div key={i} className={`${styles.star} ${styles.twinkling}`} style={style} />);
    }

    // Add falling stars
    for (let i = 0; i < numFallingStars; i++) {
      const style = {
        left: generateRandomPosition(isClient ? window.innerWidth : 0),
        animationDelay: `${Math.random() * 5}s`,
      };
      stars.push(
        <div key={i + numStars} className={`${styles.star} ${styles.fallingStar}`} style={style} />
      );
    }

    return stars;
  };

  return <div className={styles.nightSky}>{renderStars()}</div>;
};

export default Stars;


