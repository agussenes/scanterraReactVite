import React from "react";
import Seo from "../../seo/Seo";


// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import Resumen from "../../components/sections/solucionesEspecificas/reutilizables/Resumen";
import BannerAgroindustria from "../../components/sections/solucionesEspecificas/reutilizables/BannerAgroindustria";
import TabsSolEs from "../../components/sections/solucionesEspecificas/reutilizables/tab/TabsSolEs";
import BloqueBtnHover from "../../components/sections/solucionesEspecificas/reutilizables/bloqueBtnHover/BloqueBtnHover";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaScanRelevamineto.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaScanRelevaminetoMobile.webp";

// imagen resumen 
import imgResumen from '../../assets/img/solucionesEspecificas/scanRelevamiento/img1.webp';

// imagenes tabs 
import imgT1 from '../../assets/img/solucionesEspecificas/scanRelevamiento/imgTabs/imgT1.webp';
import imgT2 from '../../assets/img/solucionesEspecificas/scanRelevamiento/imgTabs/imgT2.webp';
import imgT3 from '../../assets/img/solucionesEspecificas/scanRelevamiento/imgTabs/imgT3.webp';
import imgT4 from '../../assets/img/solucionesEspecificas/scanRelevamiento/imgTabs/imgT4.webp';
import imgT5 from '../../assets/img/solucionesEspecificas/scanRelevamiento/imgTabs/imgT5.webp';
import imgT6 from '../../assets/img/solucionesEspecificas/scanRelevamiento/imgTabs/imgT6.webp';
import imgT7 from '../../assets/img/solucionesEspecificas/scanRelevamiento/imgTabs/imgT7.webp';
import imgT8 from '../../assets/img/solucionesEspecificas/scanRelevamiento/imgTabs/imgT8.webp';
import imgT9 from '../../assets/img/solucionesEspecificas/scanRelevamiento/imgTabs/imgT9.webp';


// imagenes BloqueBtnHover 
import imgB1 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgProductividad.webp';
import imgB2 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgControl.webp';
import imgB3 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgGeogestion.webp';


function ScanRelevamiento() {

    const resumenBajada = (
        <>
            Estudios que le permitirán conocer objetivamente su campo para elegir el rumbo adecuado cada campo es diferente y cada ambiente requiere de planteos productivos a su medida para maximizar su rentabilidad. Scanrelevamiento le permitirá conocer a fondo cada porción de su campo a través de mediciones objetivas, con informes sobre su historial en el tiempo, sus áreas críticas y todos esos aspectos que son cruciales para conocer su activo más preciado, y así tasar, subdividir o confirmar el valor de su campo con exactitud.
            <br />
            Informes descriptivos y explicativos del estudio realizado junto con los mapas e imágenes satelitales correspondientes, con alto valor agregado en formato digital e impreso.
        </>
    );

    return (
        <>
            <Seo
                title="ScanRelevamiento"
                description="ScanRelevamiento - Scanterra Soluciones Satelitales Aplicadas"
                path="/scanrelevamiento"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/scanrelevamiento",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                }}
            />

            <Portada
                title="SCANRELEVAMIENTO"
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}
            />
            <Resumen
                txtBold='¿Le gustaría conocer su campo en profundidad?'
                bajada={resumenBajada}
                img={imgResumen}
            />
            <TabsSolEs
                tabPrincipal='01. Ambientes en Detalle'
                img1={imgT1}
                img2={imgT2}
                titulo1='AMBIENTES EN DETALLE'
                titulo2=''
                bajada1='Estudio que permite conocer objetivamente todo su campo diferenciando con precisión los distintos ambientes agrícolas, ganaderos y no productivos en detalle. Esto permite realizar subdivisiones, tasaciones, planificar canales, caminos, etc. con gran exactitud. Estudio realizado con información satelital de más de 20 años.'
                bajada2='Los estudios, información y resultados se presentan en un entorno digital web y móvil simplificando y facilitando la interpretación y uso desde cualquier lugar y dispositivo.'
            />

            <TabsSolEs
                tabPrincipal='02. Ambientes Básicos'
                img1={imgT3}
                img2=''
                titulo1='AMBIENTES BÁSICOS'
                titulo2=''
                bajada1='Estudio que permite diferenciar ambientes agrícolas, ganaderos y no productivos. Estudio realizado con información satelital de más de 20 años.'
                bajada2=''
            />

            <TabsSolEs
                tabPrincipal='03. Relieve'
                img1={imgT4}
                img2={imgT5}
                titulo1='RELIEVE'
                titulo2=''
                bajada1='Elaboración de detalle de mapas de altimetría, curvas de nivel, pendiente, orientación de la pendiente de su campo.'
                bajada2='Los estudios, información y resultados se presentan en un entorno digital web y móvil simplificando y facilitando la interpretación y uso desde cualquier lugar y dispositivo.'
            />

            <TabsSolEs
                tabPrincipal='04. Cuantificación de Áreas'
                img1={imgT6}
                img2=''
                titulo1='CUANTIFICACIÓN DE ÁREAS'
                titulo2=''
                bajada1='Estudio que permite identificar distinto tipo de coberturas (cultivos, monte, agua, etc.) y cuantificar su área.'
                bajada2=''
            />

            <TabsSolEs
                tabPrincipal='05. Historial del Lote'
                img1={imgT7}
                img2=''
                titulo1='HISTORIAL DEL LOTE'
                titulo2=''
                bajada1='Estudio que permite identificar y cuantificar con precisión los distintos cultivos por lotes por campaña. Disponible para las últimas 20 campañas.'
                bajada2=''
            />

            <TabsSolEs
                tabPrincipal='06. Croquis'
                img1={imgT8}
                img2={imgT9}
                titulo1='CROQUIS'
                titulo2=''
                bajada1='Elaboración en detalle de mapas de ubicación, perímetro, lotes, usos y mejoras.'
                bajada2='Los estudios, información y resultados se presentan en un entorno digital web y móvil simplificando y facilitando la interpretación y uso desde cualquier lugar y dispositivo.'
            />

            <BannerAgroindustria />

            <BloqueBtnHover
                cantidadColumnas={3}
                img1={imgB1}
                img2={imgB2}
                img3={imgB3}
                url1='/scanproductividad'
                url2='/scangeogestion'
                url3='/scancontrol'
            />



        </>
    );
}

export default ScanRelevamiento;