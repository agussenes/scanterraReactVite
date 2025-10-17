import React from "react";
import Seo from "../../seo/Seo";
import { Container } from "react-bootstrap";

// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import QueHacemos from "../../components/sections/soluciones/dominioMaritimo/QueHacemos/QueHacemos";
import BloqueTexto from "../../components/sections/soluciones/dominioMaritimo/bloqueTexto/BloqueTexto";
import Hr from "../../components/reutilizables/hr/Hr";
import GallerySwiper from "../../components/reutilizables/gallerySwiper/GallerySwiper";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaDominioMaritimo.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaDominioMaritimoMobile.webp";

// imágenes carousel
import img1 from "../../assets/img/soluciones/dominioMaritimo/carousel/img1.webp";
import img2 from "../../assets/img/soluciones/dominioMaritimo/carousel/img2.webp";
import img3 from "../../assets/img/soluciones/dominioMaritimo/carousel/img3.webp";
import img4 from "../../assets/img/soluciones/dominioMaritimo/carousel/img4.webp";

function DominioMaritimo() {
    const imagenes = [
        { src: img1, alt: "Imagen de alta resolución | Represa Nova Kakhovka (Ucrania)", caption: "Imagen de alta resolución | Represa Nova Kakhovka (Ucrania)" },
        { src: img2, alt: "Imagen de alta resolución | Ciudad de Venecia", caption: "Imagen de alta resolución | Ciudad de Venecia" },
        { src: img3, alt: "Imagen de alta resolución | Puerto en Arabia SauditaImagen de alta resolución | Puerto en Arabia Saudita", caption: "Imagen de alta resolución | Puerto en Arabia SauditaImagen de alta resolución | Puerto en Arabia Saudita" },
        { src: img4, alt: "Imagen de alta resolución | Puerto en Arabia Saudita", caption: "Imagen de alta resolución | Puerto en Arabia Saudita" },
    ];

    return (
        <>
            <Seo
                title="Dominio Maritimo"
                description="Dominio Maritimo Scanterra - Soluciones Satelitales Aplicadas"
                path="/dominio-maritimo"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/dominio-maritimo",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                }}
            />

            <Portada
                title="DOMINIO MARÍTIMO"
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

export default DominioMaritimo;
