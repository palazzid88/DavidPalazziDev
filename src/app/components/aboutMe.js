import styles from './components.module.css';

export default function AboutMe() {
  const aboutData = {
    descriptionMe: "Soy un desarrollador full stack con una sólida experiencia en JavaScript, tanto en frontend como en backend. Utilizo tecnologías como React y Next.js para crear interfaces de usuario dinámicas y atractivas, y Node.js junto con Express para desarrollar aplicaciones robustas del lado del servidor. Tengo un buen manejo en la creación y gestión de APIs RESTful, realizando operaciones CRUD conectadas a bases de datos MongoDB, lo que me permite desarrollar soluciones completas y eficientes.",
    description: "Mi enfoque no se limita solo a lo técnico. Como persona, soy alguien que disfruta colaborar y ayudar a otros, ya sea en mi vida diaria o en el entorno laboral. Me involucro activamente en la búsqueda de soluciones, tanto en los desafíos de mi equipo como en los problemas de las personas que me rodean. Siempre estoy dispuesto a ofrecer mi apoyo, compartir mi experiencia y contribuir sin esperar nada a cambio. Creo firmemente que el éxito compartido es el más gratificante, y es por eso que valoro tanto el trabajo en equipo y la ayuda mutua. Mi portfolio incluye proyectos que abarcan desde sitios web estáticos y dinámicos hasta e-commerce, destacando mi capacidad para abordar desafíos tanto en el frontend como en el backend. Siempre busco aprender nuevas tecnologías y perfeccionar mis habilidades para ofrecer soluciones innovadoras y de alto impacto",
    img: "/images/profile.jfif"
  };

  return (
    <section className={styles.aboutMe}>
      <img src={aboutData.img} alt="Profile Image" className={styles.profileImage} />
      <div className={styles.descriptionMe}>
        <h1>Sobre mí</h1>
        <p>{aboutData.descriptionMe}</p>
        <p>{aboutData.description}</p>
      </div>
    </section>
  );
}
