import React from 'react';
import Portfolio from '../components/portfolio';

const PortfolioPage = () => {
    return (
        <>
            <section className="portfolio-section">
                <h1 className="text-center">Mis Trabajos</h1>
                <Portfolio />
            </section>
        </>
    );
};

export default PortfolioPage;
