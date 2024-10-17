import Image from 'next/image';
import { certifications } from '@/data/certificationsData';
import styles from './certifications.module.css';

export default function Certifications() {
  return (
    <div >
      <div className={styles.certifitationsContainer}>
        <h1 className={styles.divContainer} >Mis Diplomas</h1>
      </div>
      <div className={styles.diplomasContainer}>
        {certifications.map((certifications, index) => (
          <div key={index} className={styles.diplomaItem}>
            <div className={styles.imageContainer}>
              <Image
                src={certifications.src}
                alt={certifications.name}
                fill
                className={styles.diplomaImage}
              />
            </div>
            <h2>{certifications.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
