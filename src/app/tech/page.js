import Head from 'next/head'
import Skills from '../components/technologies/Skills'
import TecnologiesDev from '../components/technologies/technologiesDev'
import Navbar from '../components/navBar/Navbar'
import Footer from '../components/footer/Footer'

export default function techPage() {
        return(
            <>
        <Head >
        <title>Mi Landing Page - Portfolio - Desarrollador Web Full Stack </title>
        <meta name="description" content="Landing page de un desarrollador web especializado en Javascript React.js Node.js Express.js MongoDB HTML CSS Frameworks ."></meta>
      </Head>
      <Navbar />
      <main>       
        <Skills />
      </main>
      <Footer />
    </>
        )
}
