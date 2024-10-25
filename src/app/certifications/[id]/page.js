import Navbar from '@/app/components/navBar/Navbar';
import {certificationsData } from '@/data/certificationsData';
import { Button, Nav } from 'react-bootstrap';
import styles from './certifications.module.css'
import Footer from '@/app/components/footer/Footer';
import Head from 'next/head';
import Link from 'next/link';

export default function CertificationsItem( {params} ) {
    const { id } = params;
    const certification = certificationsData.find((item) => item.id === parseInt(id));
    console.log("id", id);
    console.log("certification", certification)

  return (
    <>
    <Head >
        <title>Mi Landing Page - Portfolio - Desarrollador Web Full Stack </title>
        <meta name="certifications" content="Landing page de un desarrollador web especializado en Javascript React.js Node.js Express.js MongoDB HTML CSS Frameworks ."></meta>
    </Head>
    <Navbar />
        <div className={styles.certificationsContainer}>
            <div className={styles.title}>{certification.name}</div>
            <img src={certification.src} alt={certification.name} className={styles.certificationImage}/>
            <Link key={certification.id} href={'/certifications'} passHref>
                <Button variant="info">
                    Volver
                </Button>
            </Link>
            {/* Botón de descarga */}
            <a href={`/images/certifications/${certification.file}`} download={certification.file}>
                <Button variant="success" className={styles.downloadButton}>
                    Descargar Certificado
                </Button>
            </a>
        </div>
    <Footer />
    </>
)
}
