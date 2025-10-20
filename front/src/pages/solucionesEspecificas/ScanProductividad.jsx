import React from "react";
import Seo from "../../seo/Seo";


// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import Resumen from "../../components/sections/solucionesEspecificas/reutilizables/Resumen";
import BannerAgroindustria from "../../components/sections/solucionesEspecificas/reutilizables/BannerAgroindustria";
import TabsSolEs from "../../components/sections/solucionesEspecificas/reutilizables/tab/TabsSolEs";
import BloqueBtnHover from "../../components/sections/solucionesEspecificas/reutilizables/bloqueBtnHover/BloqueBtnHover";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaScanProductividad.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaScanProductividadMobile.webp";

// imagen resumen 
import imgResumen from '../../assets/img/solucionesEspecificas/scanProductividad/img1.webp';

// imagenes tabs WG
import imgPA from '../../assets/img/solucionesEspecificas/scanProductividad/imgTabs/imgPA.webp';
import imgAP from '../../assets/img/solucionesEspecificas/scanProductividad/imgTabs/imgAP.webp';
import imgAP2 from '../../assets/img/solucionesEspecificas/scanProductividad/imgTabs/imgAP2.webp';


// imagenes BloqueBtnHover 
import imgB1 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgControl.webp';
import imgB2 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgGeogestion.webp';
import imgB3 from '../../assets/img/solucionesEspecificas/imgBloqueHover/imgRelevamiento.webp';


function ScanProductividad() {

    const resumenBajada = (
        <>
            Solución que permite aumentar la productividad y las ganancias del productor agropecuario.
            <br />
            Scanproductividad hace foco en aumentar sus rendimientos y reducir sus gastos operativos para maximizar sus resultados.
            <br />
            Conocer a fondo su campo, el potencial productivo, la variabilidad intra-lotes y optimizar el uso de sus recursos es una necesidad clave del productor a lo largo de todas las etapas productivas de su negocio.
        </>
    );



    return (
        <>
            <Seo
                title="ScanProductividad"
                description="ScanProductividad - Scanterra Soluciones Satelitales Aplicadas"
                path="/scanregional"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/scanproductividad",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                }}
            />

            <Portada
                title="SCANPRODUCTIVIDAD"
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}
            />
            <Resumen
                txtBold='¿Su campo le está generando la mayor utilidad posible?'
                bajada={resumenBajada}
                img={imgResumen}
            />
            <TabsSolEs
                tabPrincipal='01. Potencial vs Actual'
                img1={imgPA}
                img2=''
                titulo1='Potencial Productivo vs. Uso Actual'
                titulo2=''
                bajada1='Estudio que permite detectar objetivamente el potencial productivo de su campo y validarlo con el uso actual con el objetivo principal de identificar áreas sub y sobre aprovechadas. Esto permite replantear el esquema productivo maximizando las ganancias. Estudio realizado con información satelital de más de 20 años.'
                bajada2=''
            />

            <TabsSolEs
                tabPrincipal='02. Agricultura de Precisión'
                img1={imgAP}
                img2={imgAP2}
                titulo1='AGRICULTURA DE PRECISION INTEGRAL'
                titulo2=''
                bajada1='Información que acompaña al productor a incorporar la agricultura de precisión en todo el proceso, de una manera lógica y organizada, desde la pre-siembra hasta post-cosecha..'
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

export default ScanProductividad;
