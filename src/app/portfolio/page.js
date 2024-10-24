import Head from "next/head";
import PortfolioDev from "../components/portfolioDev/PortfolioDev";
import Navbar from "../components/navBar/Navbar";
import PortfolioList from "../components/portfolioDev/PortfolioList";
import PortfolioListContainer from "../components/portfolioDev/PortfolioListContainer";
import Link from "next/link";
import { Button } from "react-bootstrap";
import Footer from "../components/footer/Footer";

export default function LandingPortfolio () {
    return(
    <>
        <Head>
        <title>Mi Landing Page - Portfolio - Desarrollador Web Full Stack </title>
        <meta name="description" content="Landing page de un desarrollador web especializado en Javascript React.js Node.js Express.js MongoDB HTML CSS Frameworks ."></meta>
      </Head>
      <Navbar />
      <main>
       
        <PortfolioListContainer />
      </main>
      <Footer />
    </>

    )
}