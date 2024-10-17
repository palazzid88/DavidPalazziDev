import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Head from 'next/head';
import Footer from './components/Footer';
import ContactPage from './components/ContactForm';
import AboutMe from './components/aboutMe';
import Animania from './components/Animania';
import OtherDescription from './components/OtherDescription';
import PortfolioDev from './components/PortfolioDev';
export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Mi Landing Page - Portfolio - Desarrollador Web Full Stack </title>
        <meta name="description" content="Landing page de un desarrollador web especializado en Javascript React.js Node.js Express.js MongoDB HTML CSS Frameworks ."></meta>
      </Head>
      <Navbar />
      <main>
        <Animania />
        <AboutMe />
        <PortfolioDev />
        <Certifications />
        <OtherDescription />
        <Skills />
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
