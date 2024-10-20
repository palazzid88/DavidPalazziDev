import Link from 'next/link';
import Image from 'next/image';
import styles from './aboutMe.module.css';

export default function AboutMe() {

  const aboutData = {
    description: "Soy un desarrollador full stack con experiencia en JavaScript, tanto en frontend como en backend. Utilizo tecnologías como React y Next.js para crear interfaces de usuario dinámicas y atractivas, y Node.js junto con Express para desarrollar aplicaciones robustas del lado del servidor. Tengo un buen manejo en la creación y gestión de APIs RESTful, realizando operaciones CRUD conectadas a bases de datos MongoDB, lo que me permite desarrollar soluciones completas y eficientes. full stack...",
    img: "/images/profile-img.jpg"
  };

  const formacion = [
    { title: "Desarrollador FullStack", instituto: "Coder House" },
    { title: "Técnico Electrónico", instituto: "EETS N°6 San Nicolás de los Arroyos" },
    { title: "Universitario Incompleto, Ing. Electrónica (2 años)", instituto: "UTN FRSN" }
  ];

  const data = [
    {
      nombre: 'David Ezequiél Palazzi',
      profesion: 'Full Stack developer',
      edad: '36 años',
      nacionalidad: 'Argentino',
      estado: 'Casado',
      familia: 'padre de dos'
    },
  ];

  return (
    <section className={styles.sectionProfile}>
      <div className={styles.profile}>
        <img src={aboutData.img} alt="Profile Image" className={styles.profileImage} />
        <div className={styles.dataAndDescription}>
          <div className={styles.data}>
            {data.map((item, index) => (
              <div key={index}>
                <p><strong style={{color: ' blue'}}>Nombre:</strong> {item.nombre}</p>
                <p><strong style={{color: ' blue'}}>Edad:</strong> {item.edad}</p>
                <p><strong style={{color: ' blue'}}>Nacionalidad:</strong> {item.nacionalidad}</p>
                <p><strong style={{color:'blue'}}>Estado civil:</strong> {item.estado}</p>
                <p><strong style={{color:'blue'}}>Familia:</strong> {item.familia}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.formacion}>
          {formacion.map((item, index) => (
            <div key={index}>
              <p>Carrera: <strong>{item.title}</strong></p>
              <p>Instituto: {item.instituto}</p>
            </div>
          ))}
      </div>
          <div className={styles.description}>
            <h2 style={{color: 'blue'}}> Full Stack Developer </h2>
            <p>{aboutData.description}</p>
          </div>
        </div>
      <div className={styles.contactContainer}>
        <div className={styles.downloadCV}>
          <Link href="/files/curriculimVitaePalazziDavid.pdf" target="_blank" download>
            curriculum vitae
          </Link>
        </div>        
      </div>
    </section>
  );
}
