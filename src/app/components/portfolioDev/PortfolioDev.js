"use client";
import React from 'react';
import styles from './portfolioDev.module.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

export default function PortfolioDev() {
    console.log("ingresa a portfolioDev");
    return (
        <Container className={styles.container}>
            {/* Contenedor con el degradado que envuelve el h2 y la imagen */}
            <div className={styles.contentWrapper}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className={styles.title}>Aquí puedes ver mis trabajos realizados y mi experiencia</h2>
                <Link href={`/portfolio`} passHref>
                        <Button variant="info">Ver Detalles</Button>
                    </Link>
                </div>
                <img alt="Portfolio Image" src='/images/projects.png' className={styles.image}/>
                {/* <Image
                    src="/images/projects.png" 
                    alt="Portfolio Image"
                    width={550}
                    height={400}
                    style={{ borderRadius: '10px' }} 
                    className={styles.image}
                /> */}
            </div>
        </Container>
    );
}
