import React from "react";
import Seo from "../../seo/Seo";


// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import Resumen from "../../components/sections/solucionesEspecificas/reutilizables/Resumen";
import BannerAgroindustria from "../../components/sections/solucionesEspecificas/reutilizables/BannerAgroindustria";
import TabsSolEs from "../../components/sections/solucionesEspecificas/reutilizables/tab/TabsSolEs";
import BloqueBtnHover from "../../components/sections/solucionesEspecificas/reutilizables/bloqueBtnHover/BloqueBtnHover";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaScanRegional.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaScanRegionalMobile.webp";

// imagen resumen 
import imgResumen from '../../assets/img/solucionesEspecificas/scanRegional/img1.webp';

// imagenes tabs WG
import imgWG1 from '../../assets/img/solucionesEspecificas/scanRegional/img2.webp';


// imagenes BloqueBtnHover 
import imgB1 from '../../assets/img/solucionesEspecificas/scanSeguro/img2.webp';
import imgB2 from '../../assets/img/solucionesEspecificas/scanAgroEmpresa/imgB1.webp';


function ScanRegional() {

    const resumenBajada = (
        <>
            Estudio que permite contar con información de alto valor agregado sobre determinadas regiones productivas para tomar decisiones productivas.
            Conocer una región y sus diferenciales productivos; cuántas hectáreas sembradas existen de cada cultivo, su distribución por provincia o país; saber a ciencia cierta el potencial productivo agrícola, ganadero o de producciones regionales, identificar el clima, disponibilidad de agua, relieve, suelos y contar con información de valor es clave para tomar mejores decisiones.
            <br />
            Disponible para las siguientes regiones: Argentina, Paraguay, Uruguay, Colombia. Consultar otras regiones específicas.
        </>
    );



    return (
        <>
            <Seo
                title="Scan Regional"
                description="Scan Regional - Scanterra Soluciones Satelitales Aplicadas"
                path="/scanregional"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/scanregional",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                }}
            />

            <Portada
                title="SCANREGIONAL"
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}
            />
            <Resumen
                txtBold='¿Cuánto me aporta estratégicamente conocer una zona con exactitud?'
                bajada={resumenBajada}
                img={imgResumen}
            />
            <TabsSolEs
                tabPrincipal='01.Regional'
                img1={imgWG1}
                img2=''
                titulo1='SCANREGIONAL'
                titulo2=''
                bajada1='Informes descriptivos y explicativos del estudio realizado junto con los mapas e imágenes satelitales correspondientes, con alto valor agregado en formato digital e impreso.'
                bajada2=''
            />

            <BannerAgroindustria />

            <BloqueBtnHover
                cantidadColumnas={2}
                img1={imgB1}
                img2={imgB2}
                url1='/scanagroempresa'
                url2='/scanseguros'
            />



        </>
    );
}

export default ScanRegional;
