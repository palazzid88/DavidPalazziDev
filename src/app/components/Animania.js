'use client';
import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const Animania = () => {
  const container = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Cargar el archivo JSON desde /public/animations/
    const fetchAnimationData = async () => {
      try {
        const response = await fetch('/animations/QGoo1FD07t.json');
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error loading animation data:', error);
      }
    };

    fetchAnimationData();
  }, []);

  useEffect(() => {
    if (animationData && container.current) {
      const anim = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
      return () => anim.destroy(); // Limpia la animación cuando el componente se desmonta
    }
  }, [animationData]);

  return <div ref={container} />;
};

export default Animania;
