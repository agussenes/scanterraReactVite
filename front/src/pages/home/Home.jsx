import React from 'react'
import Seo from '../../seo/Seo';

function Home() {
    return (
        <>
            <Seo
                title="Inicio"
                description="Bienvenido a Scanterra - Soluciones Satelitales Aplicadas"
                path="/"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Mi Sitio",
                    "url": "https://scanterra.com/",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }}
            />

            hola
        </>
    )
}

export default Home