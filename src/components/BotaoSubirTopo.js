import React, { useState, useEffect } from 'react';
import styles from './estilosComponents/botaoSubirTopo.module.css'; 

export default function BotaoSubirTopo () {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showScrollButton && (
      <div className={styles.scrollButton} onClick={scrollToTop}>
        <span>&uarr;</span>
      </div>
    )
  );
};

