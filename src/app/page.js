import Skills from './components/technologies/Skills';
import Certifications from './components/certifications/Certifications';
import Head from 'next/head';
import ContactPage from './components/contactForm/ContactForm';
import AboutMe from './components/aboutMe/aboutMe';
import Animania from './components/animania/Animania';
import OtherDescription from './components/OtherDescription/OtherDescription';
import Navbar from './components/navBar/Navbar';
import PortfolioDev from './components/portfolioDev/PortfolioDev';
import Footer from './components/footer/Footer';
import PortfolioListContainer from './components/portfolioDev/PortfolioListContainer';
import LandingPortfolio from './portfolio/page';

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
        {/* <LandingPortfolio /> */}
        <PortfolioDev />
        {/* <PortfolioListContainer /> */}
        <Certifications />
        <OtherDescription />
        <Skills />
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
