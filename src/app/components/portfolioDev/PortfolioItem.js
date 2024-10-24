import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './portfolioDev.module.css';
import Link from 'next/link';

const PortfolioItem = ({ project }) => {
    const dentification = project.id;
    console.log("id", dentification);
    
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
                
                    {/* Aquí agregamos el botón dentro del Link */}
                    <Link key={project.id} href={`/portfolio/${project.id}`} passHref>
                        <Button variant="info">
                            Ver Detalles
                        </Button>
                    </Link>
            </Card.Body>
        </Card>
    );
};

export default PortfolioItem;
