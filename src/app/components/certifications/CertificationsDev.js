import Link from 'next/link';
import React from 'react'
import { Button, Container } from 'react-bootstrap';
import styles from './certificationsDev.module.css'

export default function CertificationsDev() {
    console.log("ingresa a portfolioDev");
    return (
        <>
            <div className={styles.container}>
                <div className={styles.certificationsInfo}>
                    <h2>
                        Mis Certificaciones
                    </h2>
                    <Link href={`/certifications`} passHref style={{padding: '5px'}}>
                            <Button variant="info">Ver Detalles</Button>
                    </Link>
                </div>
                <img alt="certification Image" src='/images/card1.png' className={styles.image}/>
            </div>
        </>
    );
}
