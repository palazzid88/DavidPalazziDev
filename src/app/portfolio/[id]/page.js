import { websData } from '@/data/websData';
import styles from './page.module.css';
import Navbar from '@/app/components/navBar/Navbar';
import Footer from '@/app/components/footer/Footer';
import { Button } from 'react-bootstrap';

export default function ProjectDetail({ params }) {
    const { id } = params;
    const project = websData.find((item) => item.id === parseInt(id));

    return (
        <>
        <Navbar />
        <div className={styles.container}>
            <div className={styles.title}>{project.title}</div>
            <div className={styles.card}>
              <img src={project.image} alt={project.title} className={styles.image} />
              <div className={styles.description}>{project.description}</div>
              
                    

            </div>
            <div className={styles.info}>
              <p className={styles.p}><strong style={{color: 'coral'}}>Technologías:</strong> {project.technologies}</p>
              <div className="d-flex justify-content-between">
                    <Button variant="primary" href={project.webLink} target="_blank">
                        Ver Web
                    </Button>
                    <Button variant="secondary" href={project.repoLink} target="_blank">
                        Ver Repositorio
                    </Button>
              </div>
            </div>
        </div>
        <Footer />
        </>
    );
}