import React from 'react'
import Seo from '../../seo/Seo';

// componentes UI 
import Portada from '../../components/reutilizables/portada/Portada';
import MapaCounter from '../../components/sections/home/mapaCounter/MapaCounter';
import EspecialistasGestion from '../../components/sections/home/especialistasGestion/EspecialistasGestion';
import BannerAgroindustria from '../../components/sections/home/bannerAgroindustria/BannerAgroindustria';

// imagenes
import imgPortada from '../../assets/img/portadas/portadaHome.webp';
import imgPortadaMobile from '../../assets/img/portadas/portadaHomeMobile.webp';


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
            <Portada
                title=""
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}
                overlay={false}
            />

            <MapaCounter />

            <EspecialistasGestion />

            <BannerAgroindustria />

        </>
    )
}

export default Home