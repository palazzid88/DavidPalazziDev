import styles from './components.module.css';

const AboutMe = ({ aboutData }) => {
    return (
        <section className={styles.aboutMe}>
            {/* <img */}
                {/* src={aboutData.img} */}
                {/* alt="Profile Image" */}
                {/* className="profile-image" */}
            {/* /> */}
            <div className={styles.descriptionMe}>
                <h1>Sobre mí</h1>
                {/* <p>{aboutData.description}</p> */}
            </div>
        </section>
    );
};

export async function getStaticProps() {
    const aboutData = {
        description: "Soy un apasionado desarrollador web que cree firmemente que la perseverancia y el trabajo duro son la clave para transformar ideas en realidades. Mi capacidad para razonar y encontrar soluciones efectivas se complementa con una actitud proactiva y una dedicación constante. Valoro el trabajo en equipo, donde la colaboración y el intercambio de ideas son fundamentales para el éxito de cualquier proyecto. La persistencia me impulsa a superar obstáculos, siempre buscando aprender y mejorar en cada paso del camino. Mi objetivo es crear soluciones innovadoras que no solo cumplan con las expectativas, sino que las superen.",
        // img: "/images/profile.jfif"
    };

    return {
        props: {
            aboutData,
        },
    };
}

export default AboutMe;
