import Head from 'next/head';
import { Row, Col, Container } from 'react-bootstrap';
import Animania from './components/animania/Animania';
import AboutMe from './components/aboutMe/aboutMe';
import PortfolioDev from './components/portfolioDev/PortfolioDev';
import CertificationsDev from './components/certifications/CertificationsDev';
import OtherDescription from './components/OtherDescription/OtherDescription';
import ContactPage from './components/contactForm/ContactForm';
import Footer from './components/footer/Footer';
import Navbar from './components/navBar/Navbar';
import styles from './page.module.css';
import Technologies from './components/technologies/Skills';
import TecnologiesDev from './components/technologies/technologiesDev';


export default function LandingPage() {
  return (
    <>
      <Head >
        <title>Mi Landing Page - Portfolio - Desarrollador Web Full Stack</title>
        <meta name="description" content="Landing page de un desarrollador web especializado en Javascript React.js Node.js Express.js MongoDB HTML CSS Frameworks."></meta>
      </Head>
      <Navbar />
      <main>
        <Animania />
        <AboutMe />
        
        <div className={styles.containerInfo}>
              <PortfolioDev />
              <CertificationsDev />
              <TecnologiesDev />
        </div>
        {/* <Technologies /> */}
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
