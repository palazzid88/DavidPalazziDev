import Image from 'next/image';
import { technologiesData } from '../../data/technologiesData';
import styles from './technologies.module.css';

export default function Technologies() {
  return (
    <div className={styles.technologiesContainer}>
      <h1 className={styles.mainTitle}>Mis Tecnologías</h1>

      {/* Front-End */}
      <div className={styles.technologiesSection}>
        <h2 className={styles.sectionTitle}>Front-End</h2>
        <div className={styles.technologiesList}>
          {technologiesData.frontEnd.map((tech) => (
            <div key={tech.name} className={styles.technologyItem}>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Back-End */}
      <div className={styles.technologiesSection}>
        <h2 className={styles.sectionTitle}>Back-End</h2>
        <div className={styles.technologiesList}>
          {technologiesData.backEnd.map((tech) => (
            <div key={tech.name} className={styles.technologyItem}>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Herramientas */}
      <div className={styles.technologiesSection}>
        <h2 className={styles.sectionTitle}>Herramientas</h2>
        <div className={styles.technologiesList}>
          {technologiesData.tools.map((tech) => (
            <div key={tech.name} className={styles.technologyItem}>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Otros Conceptos */}
      <div className={styles.technologiesSection}>
        <h2 className={styles.sectionTitle}>Otros Conceptos Claves</h2>
        <div className={styles.technologiesList}>
          {technologiesData.otherConcepts.map((tech) => (
            <div key={tech.name} className={styles.technologyItem}>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
