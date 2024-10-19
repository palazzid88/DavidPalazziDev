import styles from './otherDescription.module.css'
import Image from 'next/image'

export default function OtherDescription() {
    const aboutDataDescription = {
        description: "Mi enfoque no se limita solo a lo técnico. Como persona, soy alguien que disfruta colaborar y ayudar a otros, ya sea en mi vida diaria o en el entorno laboral. Me involucro activamente en la búsqueda de soluciones, tanto en los desafíos de mi equipo como en los problemas de las personas que me rodean. Siempre estoy dispuesto a ofrecer mi apoyo, compartir mi experiencia y contribuir sin esperar nada a cambio. Creo firmemente que el éxito compartido es el más gratificante, y es por eso que valoro tanto el trabajo en equipo y la ayuda mutua. Mi portfolio incluye proyectos que abarcan desde sitios web estáticos y dinámicos hasta e-commerce, destacando mi capacidad para abordar desafíos tanto en el frontend como en el backend. Siempre busco aprender nuevas tecnologías y perfeccionar mis habilidades para ofrecer soluciones innovadoras y de alto impacto.",
        image: "/images/team.jpg"
    }
return (
    <section className={styles.descriptionMeSection}>
        <h2 className={styles.title}>Un poco más Sobre mí</h2>
        <div className={styles.descriptionMeContainer}>
            <img className={styles.descriptionImg} src={aboutDataDescription.image} />
            <p className={styles.descriptionParagraph}>{aboutDataDescription.description}</p>
        </div>
    </section>
)
}