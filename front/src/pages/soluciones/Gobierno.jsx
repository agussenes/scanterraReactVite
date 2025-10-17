import React from "react";
import Seo from "../../seo/Seo";
import { Container } from "react-bootstrap";

// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import QueHacemos from "../../components/sections/soluciones/gobierno/QueHacemos/QueHacemos";
import BloqueTexto from "../../components/sections/soluciones/gobierno/BloqueTexto/BloqueTexto";
import Hr from "../../components/reutilizables/hr/Hr";
import GallerySwiper from "../../components/reutilizables/gallerySwiper/GallerySwiper";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaGobierno.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaGobiernoMobile.webp";

// imágenes carousel
import img1 from "../../assets/img/soluciones/gobierno/carousel/img1.webp";
import img2 from "../../assets/img/soluciones/gobierno/carousel/img2.webp";
import img3 from "../../assets/img/soluciones/gobierno/carousel/img3.webp";
import img4 from "../../assets/img/soluciones/gobierno/carousel/img4.webp";

function Gobierno() {
    const imagenes = [
        { src: img1, alt: "Imagen de alta resolución | Ciudad de Sudán. Tráfico urbano.", caption: "Imagen de alta resolución | Ciudad de Sudán. Tráfico urbano." },
        { src: img2, alt: "Imagen de alta resolución | Ciudad de Barcelona", caption: "Imagen de alta resolución | Ciudad de Barcelona" },
        { src: img3, alt: "Imagen de alta resolución | Ciudad de Roma", caption: "Imagen de alta resolución | Ciudad de Roma" },
        { src: img4, alt: "Imagen de alta resolución | Ciudad de México", caption: "Imagen de alta resolución | Ciudad de México" },
    ];

    return (
        <>
            <Seo
                title="Gobierno"
                description="Gobierno Scanterra - Soluciones Satelitales Aplicadas"
                path="/gobierno"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/gobierno",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                }}
            />

            <Portada
                title="GOBIERNO"
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

export default Gobierno;
