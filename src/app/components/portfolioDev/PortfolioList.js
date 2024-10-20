import React from 'react';
import PortfolioItem from './PortfolioItem';
import styles from './portfolioList.module.css';

const PortfolioList = ({ projects }) => {
  return (
    <div className={styles.portfolioList}>
      {projects.length > 0 ? (
        projects.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))
      ) : (
        <p>No hay proyectos disponibles.</p>
      )}
    </div>
  );
};

export default PortfolioList;
