import Link from 'next/link';
import Image from 'next/image';

import styles from './aboutMe.module.css';

export default function AboutMe() {
  const aboutData = {
    description1: "Soy un desarrollador full stack con una sólida experiencia en JavaScript, tanto en frontend como en backend. Utilizo tecnologías como React y Next.js para crear interfaces de usuario dinámicas y atractivas, y Node.js junto con Express para desarrollar aplicaciones robustas del lado del servidor. Tengo un buen manejo en la creación y gestión de APIs RESTful, realizando operaciones CRUD conectadas a bases de datos MongoDB, lo que me permite desarrollar soluciones completas y eficientes.",
    description2: "Mi enfoque no se limita solo a lo técnico. Como persona, soy alguien que disfruta colaborar y ayudar a otros, ya sea en mi vida diaria o en el entorno laboral. Me involucro activamente en la búsqueda de soluciones, tanto en los desafíos de mi equipo como en los problemas de las personas que me rodean. Siempre estoy dispuesto a ofrecer mi apoyo, compartir mi experiencia y contribuir sin esperar nada a cambio. Creo firmemente que el éxito compartido es el más gratificante, y es por eso que valoro tanto el trabajo en equipo y la ayuda mutua. Mi portfolio incluye proyectos que abarcan desde sitios web estáticos y dinámicos hasta e-commerce, destacando mi capacidad para abordar desafíos tanto en el frontend como en el backend. Siempre busco aprender nuevas tecnologías y perfeccionar mis habilidades para ofrecer soluciones innovadoras y de alto impacto.",
    img: "/images/profile-img.jpg"
  };

  const formacion = [
    {
      title: "Desarrollador FullStack",
      instituto: "Coder House"
    },
    {
      title: "Técnico Electrónico",
      instituto: "EETS N°6 San Nicolás de los Arroyos"
    },
    {
      title: "Universitario Incompleto, Ing. Electrónica (2 años)",
      instituto: "UTN FRSN"
    }
  ];

  return (
    <section className={styles.sectionProfile}>
      <div className={styles.profile}>
        <img src={aboutData.img} alt="Profile Image" className={styles.profileImage} />
        <div className={styles.profileText}>
            <h1 className={styles.title}>Sobre mí</h1>
            <div className={styles.aboutMe}>
                <p className={styles.paragraphAboutMe}>
                    {aboutData.description1}
                </p>
                <div>
                    {formacion.map((item, index) => (
                        <div key={index}>
                        <p className={styles.paragraph}>
                            Carrera: <strong>{item.title}</strong>
                        </p>
                        <p className={styles.paragraph}>
                            Instituto: {item.instituto}
                        </p>
                        </div>
                    ))}
                    <div className={styles.contactContainer}>
                      {/* Enlace para descargar el currículum en PDF */}
                      <div className={styles.downloadCV}>
                      <Link href="/files/curriculimVitaePalazziDavid.pdf" target="_blank" download>
                        Descargar CV
                      </Link>
                      </div>

                      {/* Enlace a WhatsApp con logo */}
                      <div className={styles.whatsappLink}>
                      <Link href="https://wa.me/543364309084" target="_blank">
                        <Image
                          src="/images/wtp.png"
                          alt="WhatsApp"
                          width={32}
                          height={32}
                        />
                      </Link>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  );
}
