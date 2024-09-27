import Certifications from "./certifications/page";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Technologies from "./technologies/page";
import styles from './page.module.css'
import ContactPage from "./contact/page";
import PortfolioPage from "./porfolio/page";

export default function Home() {
    return (
      <main>
        < Navbar />
        <section className={styles.aboutMe}>
          <img
            src="images/profile.jfif"
            alt="Profile Image"
            className="profile-image"
          />
          <div className={styles.descriptionMe}>
            <h1>Sobre mí</h1>
            <p>
              Soy un apasionado desarrollador web que cree firmemente que la perseverancia y el trabajo duro son la clave para transformar ideas en realidades. Mi capacidad para razonar y encontrar soluciones efectivas se complementa con una actitud proactiva y una dedicación constante. Valoro el trabajo en equipo, donde la colaboración y el intercambio de ideas son fundamentales para el éxito de cualquier proyecto. La persistencia me impulsa a superar obstáculos, siempre buscando aprender y mejorar en cada paso del camino. Mi objetivo es crear soluciones innovadoras que no solo cumplan con las expectativas, sino que las superen.
            </p>
          </div>
        </section>
        < Technologies />
        < PortfolioPage />
        < Certifications />
        <ContactPage />
        < Footer />
      </main>
    );
  }
  