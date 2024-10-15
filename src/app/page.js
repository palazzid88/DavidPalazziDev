// pages/index.js
import Certifications from "./certifications/page";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutMe from "./components/aboutMe";
import Technologies from "./technologies/page";
import ContactPage from "./contact/page";
import Portfolio from "./components/Portfolio";

export default function Home() {
    return (
        <main>
            <Navbar />
            <AboutMe />
            <Technologies />
            <Portfolio />
            <Certifications />
            <ContactPage />
            <Footer />
        </main>
    );
}
