import Head from "next/head";
import Navbar from "../components/navBar/Navbar";
import Footer from "../components/footer/Footer";
import Certifications from "../components/certifications/Certifications";

export default function CertificationsPage () {
    return(
        <>
        <Head>
          <title>Mi Landing Page - Portfolio - Desarrollador Web Full Stack </title>
          <meta name="certifications" content="Landing page de un desarrollador web especializado en Javascript React.js Node.js Express.js MongoDB HTML CSS Frameworks ."></meta>
      </Head>
      <Navbar />
      <main>
        <Certifications />
      </main>
      <Footer />
    </>
    )
}