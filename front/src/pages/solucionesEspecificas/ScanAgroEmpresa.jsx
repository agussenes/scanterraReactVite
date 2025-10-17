import React from "react";
import Seo from "../../seo/Seo";


// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import Resumen from "../../components/sections/solucionesEspecificas/reutilizables/Resumen";
import BannerAgroindustria from "../../components/sections/solucionesEspecificas/reutilizables/BannerAgroindustria";
// import TabsSolEs from "../../components/sections/solucionesEspecificas/scanAgroEmpresa/tabs/tabsSolEs";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaScanAgroempresa.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaScanAgroempresaMobile.webp";

// imagen resumen 
import imgResumen from '../../assets/img/solucionesEspecificas/scanAgroEmpresa/img1.webp';


function ScanAgroEmpresa() {

    const resumenBajada = (
        <>
            Proveemos una solución orientada a mejorar la gestión de información clave en una empresa agropecuaria, tanto a nivel comercial y de marketing, como en sus facetas productivas.
            <br />
            Scanagroempresa es un software de información satelital que le brinda información clave para su negocio. Consiste en tres módulos orientados a trabajar sobre sus estrategias comerciales, productivas y de investigación y desarrollo.
            <br />
            A nivel de producción, scanagroempresa le permitirá reducir riesgos, optimizar tiempos de producción y mejorar el trabajo en equipo, contando con información online sobre el estado de sus cultivos y/o planteos productivos, para mejorar los índices de rentabilidad de su negocio. Además, es una potente herramienta de marketing para su empresa, en tanto le permite conocer dónde están sus clientes, cuál es el potencial de negocio en una zona o región determinada o mapear sus ventas actuales.
        </>
    );

    return (
        <>
            <Seo
                title="Scan Agroempresa"
                description="Gobierno Scanterra - Soluciones Satelitales Aplicadas"
                path="/scanagroempresa"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/scanagroempresa",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                }}
            />

            <Portada
                title="SCANAGROEMPRESA"
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}
            />
            <Resumen
                txtBold='¿Desearía contar con la información de las distintas áreas de su empresa integrada en un único sistema (web + móvil) y conocer la ubicación de los distintos intereses?'
                bajada={resumenBajada}
                img={imgResumen}
            />
            {/* <TabsSolEs /> */}
            <BannerAgroindustria />



        </>
    );
}

export default ScanAgroEmpresa;
