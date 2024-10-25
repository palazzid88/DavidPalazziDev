import Link from 'next/link'
import styles from './technologies.module.css'
import { Button } from 'react-bootstrap'
export default function TecnologiesDev () {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.portfolioInfo}>
                    <h2>
                        Mis Tecnologías
                    </h2>
                    <Link href={`/tech`} passHref style={{padding: '5px'}}>
                            <Button variant="info">Ver Detalles</Button>
                    </Link>
                </div>
                <img alt="Portfolio Image" src='/images/skills.png' className={styles.image}/>
            </div>
        </>
    )
} 