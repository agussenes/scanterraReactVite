import React from 'react';
import Seo from '../../seo/Seo';


// componentes UI 
import Portada from '../../components/reutilizables/portada/Portada';
import QueHacemos from '../../components/sections/soluciones/agroindustria/QueHacemos/QueHacemos';
import Hr from '../../components/reutilizables/hr/Hr';
import SolProductor from '../../components/sections/soluciones/agroindustria/solucionesEspecificas/SolProductor';
import SolEmpresas from '../../components/sections/soluciones/agroindustria/solucionesEspecificas/SolEmpresas';
import PrincipalesBenes from '../../components/sections/soluciones/agroindustria/principalesBenes/PrincipalesBenes';

// imagenes
import imgPortada from '../../assets/img/portadas/portadaAgroIndustria.webp';
import imgPortadaMobile from '../../assets/img/portadas/portadaAgroIndustriaMobile.webp';

function Agroindustria() {
    return (
        <>
            <Seo
                title="Agroindustria"
                description="Solucion de Agroindustria - Soluciones Satelitales Aplicadas"
                path="/agroindustria"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Mi Sitio",
                    "url": "https://scanterra.com/agroindustria",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }}
            />
            <Portada
                title="AGROINDUSTRIA"
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}         
            />
            <QueHacemos />
            <Hr />
            <SolProductor />
            <Hr />
            <SolEmpresas />
            <PrincipalesBenes />

        </>
    )
}

export default Agroindustria;