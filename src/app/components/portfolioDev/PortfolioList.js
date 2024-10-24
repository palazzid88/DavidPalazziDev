import React from 'react';
import PortfolioItem from './PortfolioItem';
import styles from './portfolioList.module.css';
import { Col, Container, Row } from 'react-bootstrap';

const PortfolioList = ({ projects }) => {
  return (
    <>
        <Container className={styles.certificationsContainer}>
            <div>
                <h1 className={styles.divContainer}>Mi experiencia</h1>
            </div>
            <Row>
                {projects.map((project, index) => (
                    <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                        <PortfolioItem project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
</>
  );
};

export default PortfolioList;
