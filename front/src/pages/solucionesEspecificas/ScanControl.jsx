import React from "react";
import Seo from "../../seo/Seo";


// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import Resumen from "../../components/sections/solucionesEspecificas/reutilizables/Resumen";
import BannerAgroindustria from "../../components/sections/solucionesEspecificas/reutilizables/BannerAgroindustria";
import TabsSolEs from "../../components/sections/solucionesEspecificas/reutilizables/tab/TabsSolEs";
import BloqueBtnHover from "../../components/sections/solucionesEspecificas/reutilizables/bloqueBtnHover/BloqueBtnHover";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaScanControl.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaScanControlMobile.webp";

// imagen resumen 
import imgResumen from '../../assets/img/solucionesEspecificas/scanControl/img1.webp';

// imagenes tabs 
import imgT1 from '../../assets/img/solucionesEspecificas/scanControl/imgTabs/imgAC.webp';
import imgT2 from '../../assets/img/solucionesEspecificas/scanControl/imgTabs/imgAC2.webp';
import imgT3 from '../../assets/img/solucionesEspecificas/scanControl/imgTabs/imgCO.webp';
import imgT4 from '../../assets/img/solucionesEspecificas/scanControl/imgTabs/imgCO2.webp';


// imagenes BloqueBtnHover 
import imgB1 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgProductividad.webp';
import imgB2 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgGeogestion.webp';
import imgB3 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgRelevamiento.webp';


function ScanControl() {

    const resumenBajada = (
        <>
            Conocé el estudio que permite controlar eficientemente el estado y la evolución de sus cultivos para tomar las decisiones más eficientes y oportunas.
            <br />
            Luego de tomar buenas decisiones al momento de planificar su siembra, llega la hora de realizar un control y seguimiento eficiente y cercano de la evolución de sus cultivos. Proveemos herramientas online y móviles que le permitirán reducir costos, minimizar riesgos y tomar decisiones acertadas en el manejo de su producción.
        </>
    );

    const tab2InfoCultivosOnline = (
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
                title="ScanControl"
                description="ScanControl - Scanterra Soluciones Satelitales Aplicadas"
                path="/scancontrol"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/scancontrol",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                }}
            />

            <Portada
                title="SCANCONTROL"
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}
            />
            <Resumen
                txtBold='¿Querés saber cómo están tus cultivos?'
                bajada={resumenBajada}
                img={imgResumen}
            />
            <TabsSolEs
                tabPrincipal='01. A campo'
                img1={imgT1}
                img2={imgT2}
                titulo1='A CAMPO (MÓVIL)'
                titulo2=''
                bajada1='Utilice ScanMóvil para registrar a través de su celular operario, día, hora, coordenadas, fotos y datos de cada visita a sus cultivos. Comparta esta aplicación con su grupo de trabajo para obtener información compartida al instante.'
                bajada2='La aplicación móvil de la solución persigue el objetivo de hacer que la información y conocimiento lleguen al productor de una manera simple, fácil de usar y le permiten analizar en detalle todos los resultados.'
            />

            <TabsSolEs
                tabPrincipal='02. Cultivos online'
                img1={imgT3}
                img2={imgT4}
                titulo1='CULTIVOS ONLINE'
                titulo2=''
                bajada1='Acceda mediante Internet con nuestro sistema ScanWebGIS a conocer el estado de sus cultivos a nivel lote, mediante el índice verde con actualizaciones semanales.'
                bajada2={tab2InfoCultivosOnline}
            />


            <BannerAgroindustria />

            <BloqueBtnHover
                cantidadColumnas={3}
                img1={imgB1}
                img2={imgB2}
                img3={imgB3}
                url1='/scanproductividad'
                url2='/scanrelevamiento'
                url3='/scangeogestion'
            />



        </>
    );
}

export default ScanControl;