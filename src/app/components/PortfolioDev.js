"use client";
import React from 'react';
import styles from './certifications.module.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { websData } from '@/data/websData';

export default function PortfolioDev() {
    return (
        <Container className="my-5">
            <div>
            <h1 className={styles.divContainer} >Mi experiencia y trabajos realizados</h1>

            </div>
            <Row>
                {websData.map((project, index) => (
                    <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                        <Card >
                            <Card.Img variant="top" src={project.image} alt={project.title} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>
                                    Tecnologías: {project.technologies}
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary" href={project.webLink} target="_blank">
                                        Ver Web
                                    </Button>
                                    <Button variant="secondary" href={project.repoLink} target="_blank">
                                        Ver Repositorio
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};