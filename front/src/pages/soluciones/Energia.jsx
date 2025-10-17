import React from "react";
import Seo from "../../seo/Seo";
import { Container } from "react-bootstrap";

// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import QueHacemos from "../../components/sections/soluciones/energia/QueHacemos/QueHacemos";
import BloqueTexto from "../../components/sections/soluciones/energia/bloqueTexto/BloqueTexto";
import Hr from "../../components/reutilizables/hr/Hr";
import GallerySwiper from "../../components/reutilizables/gallerySwiper/GallerySwiper";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaEnergia.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaEnergiaMobile.webp";

// imágenes carousel
import img1 from "../../assets/img/soluciones/energia/carousel/img1.webp";
import img2 from "../../assets/img/soluciones/energia/carousel/img2.webp";
import img3 from "../../assets/img/soluciones/energia/carousel/img3.webp";
import img4 from "../../assets/img/soluciones/energia/carousel/img4.webp";

function Energia() {
    const imagenes = [
        { src: img1, alt: "Imagen de alta resolución | Detección de de superemisores de CO2 en Indonesia.", caption: "Imagen de alta resolución | Detección de de superemisores de CO2 en Indonesia." },
        { src: img2, alt: "Imagen de alta resolución | Planta de energía nuclear en Corea del Sur.", caption: "Imagen de alta resolución | Sierrita Mine Tailings en Estados Unidos." },
        { src: img3, alt: "Monitereo de estabilidad de taludes en minas a cielo abierto.", caption: "Imagen de alta resolución | La ciudad portuaria de Sikka, en el oeste de la India." },
        { src: img4, alt: "Imagen satelital SAR | Detección de deforestación en el Río Urucu (Brasil)", caption: "Imagen de alta resolución | Mina de cobre y cobalto Sicomines en República Democrática del Congo." },
    ];

    return (
        <>
            <Seo
                title="Energía"
                description="Energía Scanterra - Soluciones Satelitales Aplicadas"
                path="/energia"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/energia",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                }}
            />

            <Portada
                title="MINERÍA"
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}
            />

            <QueHacemos />
            <BloqueTexto />
            <Hr />

            <section className="container-fluid bg-gris-oscuro py-5">
                <h1 className="fw-bold font-celeste text-uppercase text-center ">GALERÍA</h1>

                <Container className="mt-5">
                    <GallerySwiper items={imagenes} perRow={4} />
                </Container>

            </section>
        </>
    );
}

export default Energia;
