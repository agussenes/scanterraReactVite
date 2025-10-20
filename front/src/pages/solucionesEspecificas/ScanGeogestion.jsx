import React from "react";
import Seo from "../../seo/Seo";


// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import Resumen from "../../components/sections/solucionesEspecificas/reutilizables/Resumen";
import BannerAgroindustria from "../../components/sections/solucionesEspecificas/reutilizables/BannerAgroindustria";
import TabsSolEs from "../../components/sections/solucionesEspecificas/reutilizables/tab/TabsSolEs";
import BloqueBtnHover from "../../components/sections/solucionesEspecificas/reutilizables/bloqueBtnHover/BloqueBtnHover";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaScanGeogestion.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaScanGeogestionMobile.webp";

// imagen resumen 
import imgResumen from '../../assets/img/solucionesEspecificas/scanGeogestion/img1.webp';

// imagenes tabs 
import imgT1 from '../../assets/img/solucionesEspecificas/scanGeogestion/imgTabs/imgT1.webp';
import imgT2 from '../../assets/img/solucionesEspecificas/scanGeogestion/imgTabs/imgT2.webp';

// imagenes BloqueBtnHover 
import imgB1 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgProductividad.webp';
import imgB2 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgControl.webp';
import imgB3 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgRelevamiento.webp';


function ScanGeogestion() {

    const resumenBajada = (
        <>
            Brindamos herramientas para facilitar la gestión de su campo en todo lo referido a información georeferenciada. Traducimos la información de su campo en mapas e informes que le permitirán tomar las mejores decisiones.
            <br />
            Capturar, analizar y organizar toda la información que se genera en su campo, en forma de mapas, le permitirá mejorar el manejo del mismo, la planificación de su negocio y sus márgenes de rentabilidad.
        </>
    );

    const tabAgriculturaDePrecision = (
        <>
            Servicio simple, full web con acceso desde cualquier dispositivo mediante el cual permite gestionar colaborativamente con todo su equipo de trabajo, toda la información georeferenciada de su campo. Desde mapas de lotes, ambientes, mapas de rendimiento, etc. hasta las visita a los lotes.
            <br />
            Aplicación Web y Móvil para Smartphones, Tablets y PCs con acceso desde cualquier dispositivo con conexión a internet las 24 hs del día.
        </>
    )

    const tab2AgriculturaDePrecision = (
        <>
            <>
                <ul className="list-unstyled tick-list">
                    <li><i className="bi bi-check2 me-2 text-primary " aria-hidden="true"></i> Acceso a través de Internet con usuario y clave del sistema.</li>
                    <li><i className="bi bi-check2 me-2 text-primary" aria-hidden="true"></i> Servicio en la Nube disponible las 24 hs del día.</li>
                    <li><i className="bi bi-check2 me-2 text-primary" aria-hidden="true"></i> Aplicación Web y Móvil para Smartphones, Tablets y PCs.</li>
                    <li><i className="bi bi-check2 me-2 text-primary" aria-hidden="true"></i> Actualización y mejoras permanentes.</li>
                    <li><i className="bi bi-check2 me-2 text-primary" aria-hidden="true"></i> Mesa de Ayuda.</li>
                    <li><i className="bi bi-check2 me-2 text-primary" aria-hidden="true"></i> Soporte y Seguimiento personalizado.</li>
                    <li><i className="bi bi-check2 me-2 text-primary" aria-hidden="true"></i> Capacitación.</li>
                    <li><i className="bi bi-check2 me-2 text-primary" aria-hidden="true"></i> Acceso a Base de Datos Geográfica con alto valor agregado.</li>
                    <li><i className="bi bi-check2 me-2 text-primary" aria-hidden="true"></i> Importación inicial de la información georeferenciada.</li>
                </ul>
            </>
        </>
    )

    return (
        <>
            <Seo
                title="ScanGeogestion"
                description="ScanGeogestion - Scanterra Soluciones Satelitales Aplicadas"
                path="/scangeogestion"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/scangeogestion",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                }}
            />

            <Portada
                title="SCANGEOGESTION"
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}
            />
            <Resumen
                txtBold='¿Le gustaría tener toda la información de su campo centralizada y georeferenciada, con acceso web y móvil?'
                bajada={resumenBajada}
                img={imgResumen}
            />
            <TabsSolEs
                tabPrincipal='01. Agricultura de Precisión'
                img1={imgT1}
                img2={imgT2}
                titulo1='ScanGeogestión'
                titulo2=''
                bajada1={tabAgriculturaDePrecision}
                bajada2={tab2AgriculturaDePrecision}
            />

            <BannerAgroindustria />

            <BloqueBtnHover
                cantidadColumnas={3}
                img1={imgB1}
                img2={imgB2}
                img3={imgB3}
                url1='/scanproductividad'
                url2='/scancontrol'
                url3='/scanrelevamiento'
            />

        </>
    );
}

export default ScanGeogestion;