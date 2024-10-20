import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './portfolioDev.module.css';

const PortfolioItem = ({ project }) => {
    if (!project) {
        return <p>No se pudo cargar el proyecto.</p>;
    }

    return (
        <Card className={styles.card}>
            <Card.Img variant="top" src={project.image} alt={project.title} className={styles.diplomaImage} />
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
    );
};

export default PortfolioItem;
