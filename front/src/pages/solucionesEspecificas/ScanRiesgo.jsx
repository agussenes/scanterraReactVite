import React from "react";
import Seo from "../../seo/Seo";


// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import Resumen from "../../components/sections/solucionesEspecificas/reutilizables/Resumen";
import BannerAgroindustria from "../../components/sections/solucionesEspecificas/reutilizables/BannerAgroindustria";
import TabsSolEs from "../../components/sections/solucionesEspecificas/reutilizables/tab/TabsSolEs";
import BloqueBtnHover from "../../components/sections/solucionesEspecificas/reutilizables/bloqueBtnHover/BloqueBtnHover";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaScanRiesgo.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaScanRiesgoMobile.webp";

// imagen resumen 
import imgResumen from '../../assets/img/solucionesEspecificas/scanRiesgo/img1.webp';

// imagenes tabs WGscanRiesgo
import imgT1 from '../../assets/img/solucionesEspecificas/scanRiesgo/imgTabs/imgSAS.webp';
import imgT2 from '../../assets/img/solucionesEspecificas/scanRiesgo/imgTabs/imgFA.webp';
import imgT3 from '../../assets/img/solucionesEspecificas/scanRiesgo/imgTabs/imgFA2.webp';


// imagenes BloqueBtnHover 
import imgB1 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgProductividad.webp';
import imgB2 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgControl.webp';
import imgB3 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgGeogestion.webp';


function ScanRiesgo() {

    const resumenBajada = (
        <>
            Soluciones que permiten reducir el riesgo inherente a toda actividad agropecuaria.
            <br />
            Transformar la incertidumbre en un riesgo medible y planificado es un diferencial clave a la hora de invertir con mayor seguridad.
            Tenga mayor certeza sobre la estabilidad y comportamiento de su campo. conozca la frecuencia y magnitud de posibles anegamientos y tome siempre decisiones con mayor certeza.
        </>
    );



    return (
        <>
            <Seo
                title="ScanRiesgo"
                description="ScanRiesgo - Scanterra Soluciones Satelitales Aplicadas"
                path="/scanriesgo"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/scanriesgo",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                }}
            />

            <Portada
                title="SCANRIESGO"
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}
            />
            <Resumen
                txtBold='¿Puedo disminuir los riesgos objetivamente?'
                bajada={resumenBajada}
                img={imgResumen}
            />
            <TabsSolEs
                tabPrincipal='01. Suelo, Agua y Sequía'
                img1={imgT1}
                img2=''
                titulo1='VERSIÓN GOLD: SUELO, AGUA Y SEQUÍA'
                titulo2=''
                bajada1='Estudio que permite conocer objetivamente el riesgo de su campo en relación a la calidad del suelo, el relieve, la frecuencia de anegamiento y sequía con información satelital de más de 20 años.'
                bajada2=''
            />

            <TabsSolEs
                tabPrincipal='02. Frecuencia de Anegamiento'
                img1={imgT2}
                img2={imgT3}
                titulo1='SILVER: AGUA FRECUENCIA DE ANEGAMIENTO'
                titulo2=''
                bajada1='Estudio que le permite conocer objetivamente el riesgo de su campo en relación a la frecuencia de anegamiento con información satelital de más de 20 años.'
                bajada2='INFORMES DESCRIPTIVOS Y EXPLICATIVOS DEL ESTUDIO REALIZADO JUNTO CON LOS MAPAS E IMÁGENES SATELITALES CORRESPONDIENTES, CON ALTO VALOR AGREGADO EN FORMATO DIGITAL E IMPRESO.'
            />


            <BannerAgroindustria />

            <BloqueBtnHover
                cantidadColumnas={3}
                img1={imgB1}
                img2={imgB2}
                img3={imgB3}
                url1='/scancontrol'
                url2='/scangeogestion'
                url3='/scanrelevamiento'
            />



        </>
    );
}

export default ScanRiesgo;
