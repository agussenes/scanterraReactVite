import React from "react";
import Seo from "../../seo/Seo";


// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import Resumen from "../../components/sections/solucionesEspecificas/reutilizables/Resumen";
import BannerAgroindustria from "../../components/sections/solucionesEspecificas/reutilizables/BannerAgroindustria";
import TabsSolEs from "../../components/sections/solucionesEspecificas/reutilizables/tab/TabsSolEs";
import BloqueBtnHover from "../../components/sections/solucionesEspecificas/reutilizables/bloqueBtnHover/BloqueBtnHover";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaScanAgroempresa.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaScanAgroempresaMobile.webp";

// imagen resumen 
import imgResumen from '../../assets/img/solucionesEspecificas/scanAgroEmpresa/img1.webp';

// imagenes tabs 
import imgGeo1 from '../../assets/img/solucionesEspecificas/scanAgroEmpresa/imgTabs/imgGeo1.webp';
import imgGeo2 from '../../assets/img/solucionesEspecificas/scanAgroEmpresa/imgTabs/imgGeo2.webp';
import imgGes1 from '../../assets/img/solucionesEspecificas/scanAgroEmpresa/imgTabs/imgGes1.webp';
import imgGes2 from '../../assets/img/solucionesEspecificas/scanAgroEmpresa/imgTabs/imgGes2.webp';
import imgInv1 from '../../assets/img/solucionesEspecificas/scanAgroEmpresa/imgTabs/imgInv1.webp';
import imgInv2 from '../../assets/img/solucionesEspecificas/scanAgroEmpresa/imgTabs/imgInv2.webp';

// imagenes BloqueBtnHover 
import imgB1 from '../../assets/img/solucionesEspecificas/scanAgroEmpresa/imgB1.webp';
import imgB2 from '../../assets/img/solucionesEspecificas/scanAgroEmpresa/imgB2.webp';


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

    const bajadaInvestigacionTab1 = (
        <>
            Módulo que permite mejorar los procesos de Investigación y Desarrollo de las empresas incorporando información geoespacial, satelital y las últimas tecnologías de mapeos en sus investigaciones y desarrollos clásicos. <br />
            Resulta especialmente útil para auditar y certificar ciertos procesos críticos de esta etapa.
        </>
    )

    const bajadaInvestigacionTab2 = (
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
    )

    return (
        <>
            <Seo
                title="Scan Agroempresa"
                description="Scan Agroempresa Scanterra - Soluciones Satelitales Aplicadas"
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
            <TabsSolEs
                tabPrincipal='01.Geomarketing'
                img1={imgGeo1}
                img2={imgGeo2}
                titulo1='MÓDULO GEOMARKETING + COMERCIAL'
                titulo2=''
                bajada1='Módulo específico de ScanAgroEmpresa, que permite realizar un mapeo para conocer el mercado actual y potencial: dónde están sus clientes y dónde se ubica la competencia. Esta información le permitirá planificar acciones de marketing (eventos, charlas, etc.) y comerciales. Asimismo, es una herramienta disponible para su red comercial que permite maximizar las ventas y fidelizar al cliente.'
                bajada2='La plataforma es full web y facilita el acceso tanto desde distintos dispositivos móviles como desde cualquier PC las 24 hs. Asimismo, permite trabajar colaborativamente entre todo el equipo de trabajo, integrar las distintas áreas de las empresas como también vincularlas con proveedores y clientes.'
            />

            <TabsSolEs
                tabPrincipal='02.Gestión'
                img1={imgGes1}
                img2={imgGes2}
                titulo1='MÓDULO GESTIÓN + PRODUCCIÓN'
                titulo2=''
                bajada1='Módulo que permite gestionar información georeferenciada relacionada con la producción de la empresa. Permite registrar información valiosa generada a campo. Optimiza los recorridos y la logística, aumenta la capacidad de trabajo reduciendo los costos operativos, permite potenciar el trabajo en equipo optimizando los tiempos y mejora los procesos actuales internos de su empresa.'
                bajada2='ScanAgroEmpresa brinda una plataforma simple, moderna y muy fácil de usar, pensada para que las empresas agropecuarias exploten el potencial de conocer DÓNDE están sus intereses para tomar las mejores decisiones.'

            />

            <TabsSolEs
                tabPrincipal='03.I+D'
                img1={imgInv1}
                img2={imgInv2}
                titulo1='I+D - INVESTIGACIÓN Y DESARROLLO'
                titulo2=''
                bajada1={bajadaInvestigacionTab1}
                bajada2={bajadaInvestigacionTab2}

            />

            <BannerAgroindustria />

            <BloqueBtnHover
                cantidadColumnas={2}
                img1={imgB1}
                img2={imgB2}
                url1='/scanseguros'
                url2='/scanregional'
            />



        </>
    );
}

export default ScanAgroEmpresa;
