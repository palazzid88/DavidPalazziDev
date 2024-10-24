'use client'
import React from 'react';
import styles from './portfolioListContainer.module.css';
import { websData } from '@/data/websData';
import PortfolioList from './PortfolioList';

const PortfolioListContainer = () => {
  console.log("Proyectos recibidos en PortfolioListContainer:", websData);

  return (
    <div className={styles.certificationsContainer}>
      <h1 className={styles.divContainer}>Mi experiencia y trabajos realizados</h1>
      <PortfolioList projects={websData} />
    </div>
  );
};

export default PortfolioListContainer;
