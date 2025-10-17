import React from "react";
import Seo from "../../seo/Seo";
import { Container } from "react-bootstrap";

// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import QueHacemos from "../../components/sections/soluciones/mineria/QueHacemos/QueHacemos";
import BloqueTexto from "../../components/sections/soluciones/mineria/bloqueTexto/BloqueTexto";
import Hr from "../../components/reutilizables/hr/Hr";
import GallerySwiper from "../../components/reutilizables/gallerySwiper/GallerySwiper";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaMineria.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaMineriaMobile.webp";

// imágenes carousel
import img1 from "../../assets/img/soluciones/mineria/carousel/img1.webp";
import img2 from "../../assets/img/soluciones/mineria/carousel/img2.webp";
import img3 from "../../assets/img/soluciones/mineria/carousel/img3.webp";
import img4 from "../../assets/img/soluciones/mineria/carousel/img4.webp";
import img5 from "../../assets/img/soluciones/mineria/carousel/img5.webp";

function Mineria() {
    const imagenes = [
        { src: img1, alt: "Interferometría y monitoreo satelital en minera de América del Sur.", caption: "Interferometría y monitoreo satelital en minera de América del Sur." },
        { src: img2, alt: "Imagen de alta resolución | Sierrita Mine Tailings en Estados Unidos.", caption: "Imagen de alta resolución | Sierrita Mine Tailings en Estados Unidos." },
        { src: img3, alt: "Monitereo de estabilidad de taludes en minas a cielo abierto.", caption: "Monitereo de estabilidad de taludes en minas a cielo abierto." },
        { src: img4, alt: "Imagen de alta resolución | Mina de cobre y cobalto Sicomines en República Democrática del Congo.", caption: "Imagen de alta resolución | Mina de cobre y cobalto Sicomines en República Democrática del Congo." },
        { src: img5, alt: "Mina de Atacama | Imágenes de Capella Space", caption: "Mina de Atacama | Imágenes de Capella Space" },
    ];

    return (
        <>
            <Seo
                title="Mineria"
                description="Mineria Scanterra - Soluciones Satelitales Aplicadas"
                path="/mineria"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/mineria",
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
                    <GallerySwiper items={imagenes} perRow={5} />
                </Container>

            </section>
        </>
    );
}

export default Mineria;
