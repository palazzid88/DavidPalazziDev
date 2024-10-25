import Image from 'next/image';
import { certificationsData } from '@/data/certificationsData';
import styles from './certifications.module.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function Certifications() {
  return (
    <div>
      <div className={styles.certificationsContainer}>
        <h1 className={styles.divContainer}>Mis Diplomas</h1>
      </div>
      <div className={styles.diplomasContainer}>
        {certificationsData.map((certification, id) => (
          <div key={id} className={styles.diplomaItem}>
            <div className={styles.imageContainer}>
              <Image
                src={certification.src}
                alt={certification.name}
                className={styles.diplomaImage}
                width={300}
                height={200}
              />
            </div>
            <h2>{certification.name}</h2>
            <Link href={`/certifications/${certification.id}`} passHref>
              <Button variant="info">Ver Detalles</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
