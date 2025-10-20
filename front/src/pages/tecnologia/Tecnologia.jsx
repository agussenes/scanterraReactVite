import React from 'react'
import Seo from '../../seo/Seo';


// componentes UI 
import Portada from '../../components/reutilizables/portada/Portada';
import QueHacemos from '../../components/sections/tecnologia/QueHacemos/QueHacemos';
import Hr from '../../components/reutilizables/hr/Hr';
import GeoPlataforma from '../../components/sections/tecnologia/geoplataforma/GeoPlataforma';
import ScanterraApi from '../../components/sections/tecnologia/api/ScanterraApi';

// imagenes
import imgPortada from '../../assets/img/portadas/portadaTecnologia.webp';
import imgPortadaMobile from '../../assets/img/portadas/portadaTecnologiaMobile.webp';


function Tecnologia() {
    return (
        <>
            <Seo
                title="Tecnologia"
                description="Tecnologia - Scanterra Soluciones Satelitales Aplicadas"
                path="/tecnologia"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Scanterra Soluciones Satelitales Aplicadas",
                    "url": "https://scanterra.com/tecnologia",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }}
            />
            <Portada
                title="TECNOLOGÍA"
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}
            />
            <QueHacemos />
            <Hr />
            <GeoPlataforma />
            <Hr />
            <ScanterraApi />

        </>
    )
}

export default Tecnologia