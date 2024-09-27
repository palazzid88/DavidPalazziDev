"use client";
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
// Importa los componentes directamente desde react-bootstrap
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import { websData } from '@/data/websData';

const Portfolio = () => {
    return (
        <Container className="my-5">
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

export default Portfolio;
