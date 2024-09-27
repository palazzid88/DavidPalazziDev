import React from 'react';
import Portfolio from '../components/Portfolio';  // Ruta hacia el componente de Portfolio

const PortfolioPage = () => {
    return (
        <>
            <section className="portfolio-section">
                <h1 className="text-center">Mis Trabajos</h1>
                <Portfolio />  {/* Componente del Portafolio que contiene las cards */}
            </section>
        </>
    );
};

export default PortfolioPage;
