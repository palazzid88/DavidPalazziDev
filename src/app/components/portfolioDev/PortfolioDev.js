"use client";
import React from 'react';
import styles from './portfolioDev.module.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

export default function PortfolioDev() {
    console.log("ingresa a portfolioDev");
    return (
        <>
            <div className={styles.container}>
                <div className={styles.portfolioInfo}>
                    <h2>
                        Mi Experiencia
                    </h2>
                    <Link href={`/portfolio`} passHref style={{padding: '5px'}}>
                            <Button variant="info">Ver Detalles</Button>
                    </Link>
                </div>
                <img alt="Portfolio Image" src='/images/card2.png' className={styles.image}/>
            </div>
        </>
    );
}
