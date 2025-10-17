import React from "react";
import Seo from "../../seo/Seo";
import { Container } from "react-bootstrap";

// componentes UI
import Portada from "../../components/reutilizables/portada/Portada";
import QueHacemos from "../../components/sections/soluciones/defensaSeguridad/QueHacemos/QueHacemos";
import BloqueTexto from "../../components/sections/soluciones/defensaSeguridad/bloqueTexto/BloqueTexto";
import Hr from "../../components/reutilizables/hr/Hr";
import GallerySwiper from "../../components/reutilizables/gallerySwiper/GallerySwiper";

// imágenes
import imgPortada from "../../assets/img/portadas/portadaDYS.webp";
import imgPortadaMobile from "../../assets/img/portadas/portadaDYSMobile.webp";

// imágenes carousel
import img1 from "../../assets/img/soluciones/defensaSeguridad/img1.webp";
import img2 from "../../assets/img/soluciones/defensaSeguridad/img2.webp";
import img3 from "../../assets/img/soluciones/defensaSeguridad/img3.webp";
import img4 from "../../assets/img/soluciones/defensaSeguridad/img4.webp";

function DefensaSeguridad() {
    const imagenes = [
        { src: img1, alt: "Imagen de alta resolución | Base de operaciones de submarinos en Gadzhiyevo.", caption: "Imagen de alta resolución | Base de operaciones de submarinos en Gadzhiyevo." },
        { src: img2, alt: "Imagen de alta resolución | Frontera México y Estados Unidos.", caption: "Imagen de alta resolución | Sierrita Mine Tailings en Estados Unidos." },
        { src: img3, alt: "Imagen de alta resolución | Ucrania recupera el control del aeropuerto de Mykolaiv", caption: "Imagen de alta resolución | Ucrania recupera el control del aeropuerto de Mykolaiv" },
        { src: img4, alt: "Imagen de SkySat muestran transportes militares a su llegada y salida (Afganistán).", caption: "Imagen de alta resolución | Mina de cobre y cobalto Sicomines en República Democrática del Congo." },
    ];

    return (
        <>
            <Seo
                title="Defensa y Seguridad"
                description="Defensa y Seguridad Scanterra - Soluciones Satelitales Aplicadas"
                path="/defensa-y-seguridad"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Scanterra - Soluciones Satelitales Aplicadas",
                    url: "https://scanterra.com/defensa-y-seguridad",
                    potentialAction: {
                        "@type": "SearchAction",
                        target: "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                }}
            />

            <Portada
                title="DEFENSA Y SEGURIDAD"
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

export default DefensaSeguridad;
