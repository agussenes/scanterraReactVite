import React from 'react'
import Seo from '../../seo/Seo';

// componentes UI 
import Portada from '../../components/reutilizables/portada/Portada';
import MapaCounter from '../../components/sections/home/mapaCounter/MapaCounter';
import EspecialistasGestion from '../../components/sections/home/especialistasGestion/EspecialistasGestion';
import BannerAgroindustria from '../../components/sections/home/bannerAgroindustria/BannerAgroindustria';
import PrincipalesBeneficios from '../../components/sections/home/principalesBeneficios/PrincipalesBeneficios';
import BloqueScan from '../../components/sections/home/bloqueScan/BloqueScan';
import Hr from '../../components/reutilizables/hr/Hr';
import CardsIndustrias from '../../components/sections/home/cardsIndustrias/CardsIndustrias';
import Clientes from '../../components/sections/home/clientes/Clientes';
import AlianzaEstrategicas from '../../components/sections/home/alianzaEstrategicas/AlianzaEstrategicas';
import VinculoConInstituciones from '../../components/sections/home/vinculosInstituciones/VinculoConInstituciones';
import Testimoniales from '../../components/sections/home/testimoniales/Testimoniales';
import HagamosReunion from '../../components/sections/home/hagamosReunion/HagamosReunion';

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
                    "name": "Scanterra Soluciones Satelitales Aplicadas",
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
            <PrincipalesBeneficios />
            <BloqueScan />
            <Hr />
            <CardsIndustrias />
            <Hr />
            <Clientes />
            <AlianzaEstrategicas />
            <VinculoConInstituciones />
            <Testimoniales />
            <HagamosReunion />
        </>
    )
}

export default Home