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
import imgResumen from '../../assets/img/solucionesEspecificas/scanSeguro/img1.webp';

// imagenes tabs WG
import imgWG1 from '../../assets/img/solucionesEspecificas/scanSeguro/imgTabs/imgWG1.webp';
import imgWG2 from '../../assets/img/solucionesEspecificas/scanSeguro/imgTabs/imgWG2.webp';
import imgED1 from '../../assets/img/solucionesEspecificas/scanSeguro/imgTabs/imgED1.webp';
import imgED2 from '../../assets/img/solucionesEspecificas/scanSeguro/imgTabs/imgED2.webp';
import imgAE1 from '../../assets/img/solucionesEspecificas/scanSeguro/imgTabs/imgAE1.webp';
import imgAE2 from '../../assets/img/solucionesEspecificas/scanSeguro/imgTabs/imgAE2.webp';
import imgMR1 from '../../assets/img/solucionesEspecificas/scanSeguro/imgTabs/imgMR1.webp';
import imgMR2 from '../../assets/img/solucionesEspecificas/scanSeguro/imgTabs/imgMR2.webp';

// imagenes BloqueBtnHover 
import imgB1 from '../../assets/img/solucionesEspecificas/scanSeguro/img2.webp';
import imgB2 from '../../assets/img/solucionesEspecificas/scanAgroEmpresa/imgB2.webp';


function ScanSeguros() {

    const resumenBajada = (
        <>
            Consultar información online actual e histórica del tiempo y los cultivos, las causas reales y razones de un siniestro, y administrar geográficamente la suscripción de pólizas y el surgimiento de siniestros son solo algunos de los beneficios que brinda nuestra solución para la industria del seguro.
            <br />
            Recorra nuestros módulos y encuentre la solución que está necesitando.
        </>
    );

    const bajada2Lista = (
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
                title="Scan Seguros"
                description="Scan Seguros Scanterra - Soluciones Satelitales Aplicadas"
                path="/scanseguros"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/scanseguros",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                }}
            />

            <Portada
                title="SCANSEGUROS"
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}
            />
            <Resumen
                txtBold='Herramientas para mejorar la gestión de los seguros agropecuarios.'
                bajada={resumenBajada}
                img={imgResumen}
            />
            <TabsSolEs
                tabPrincipal='01.WebGis'
                img1={imgWG1}
                img2={imgWG2}
                titulo1='SCANWEBGIS'
                titulo2=''
                bajada1='El Sistema ScanWebGIS que se integra automáticamente con la base corporativa de su empresa, permite gestionar y analizar geográficamente toda la información relacionada con suscripción, siniestro y tasaciones a campo, permitiéndole administrar el negocio, controlar los cúmulos, evaluar la red comercial de productores, entre otras acciones.'
                bajada2={bajada2Lista}
            />

            <TabsSolEs
                tabPrincipal='02.Evaluación de Daños'
                img1={imgED1}
                img2={imgED2}
                titulo1='EVALUACIÓN DE DAÑOS'
                titulo2=''
                bajada1='Estudio basado principalmente en información de distintos satélites que permite conocer, depende el caso, las causas, las fechas y las magnitud de los siniestros agropecuarios.'
                bajada2='Los estudios, información y resultados se presentan en un entorno digital web y móvil simplificando y facilitando la interpretación y uso desde cualquier lugar y dispositivo.'

            />

            <TabsSolEs
                tabPrincipal='03.Análisis de Eventos'
                img1={imgAE1}
                img2={imgAE2}
                titulo1='ANÁLISIS DE EVENTOS ESPECÍFICOS'
                titulo2=''
                bajada1='Estudio basado principalmente en información satelital que permite evaluar objetivamente eventos climáticos como granizo, sequías, anegamientos, heladas y cruzarlos con los asegurados de la compañía.'
                bajada2='Los estudios, información y resultados se presentan en un entorno digital web y móvil simplificando y facilitando la interpretación y uso desde cualquier lugar y dispositivo.'

            />
            <TabsSolEs
                tabPrincipal='04.Multi-Riesgo'
                img1={imgMR1}
                img2={imgMR2}
                titulo1='MULTI-RIESGO'
                titulo2=''
                bajada1='Es un servicio integral que permite conocer y medir el riesgo de los lotes antes de la siembra como también realizar el seguimiento de los cultivos durante su desarrollo hasta la cosecha.'
                bajada2='Este estudio permite conocer objetivamente el riesgo de un campo en relación a la calidad del suelo, el relieve, la frecuencia de anegamiento y sequía con información satelital de más de 20 años.'

            />

            <BannerAgroindustria />

            <BloqueBtnHover
                cantidadColumnas={2}
                img1={imgB1}
                img2={imgB2}
                url1='/scanagroempresa'
                url2='/scanregional'
            />



        </>
    );
}

export default ScanSeguros;
