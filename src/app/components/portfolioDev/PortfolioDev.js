"use client";
import React from 'react';
import styles from './portfolioDev.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { websData } from '@/data/websData';
import PortfolioItem from './PortfolioItem';

export default function PortfolioDev() {
    return (
        <Container className={styles.certificationsContainer}>
            <div>
                <h1 className={styles.divContainer}>Mi experiencia y trabajos realizados</h1>
            </div>
            <Row>
                {websData.map((project, index) => (
                    <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                        <PortfolioItem project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
