import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Testimoniales.css";

const DATA = [
    {
        texto:
            "Excelente atención. Sus servicios y conocimiento nos permitió no solo ambientar los campos y conocer más en profundidad el mismo, sino también auditar el manejo actual de como se venía realizando la actividad.",
        autor: "AGROPECUARIA LA DULCE",
    },
    {
        texto:
            "Excelente empresa. Una gran experiencia en el manejo de estas tecnologías. Nos logró dar estudios muy completos, ambientación de campos de acuerdo a su potencial, sus limitantes, riesgo y demás características que nos permitió tomar decisiones claves en el negocio inmobiliario.",
        autor: "ARRAIZAGRO",
    },
    // agrega más…
];

export default function Testimoniales() {
    return (
        <section className="container-fluid pt-4 px-0">
            <Container>
                <h2 className="text-center color-font fw-bold mb-4">TESTIMONIALES</h2>
            </Container>

            <Container fluid className="bg-gris">
                <Container className="py-4">
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        className="testi-swiper"
                        slidesPerView={1}
                        spaceBetween={24}
                        loop
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { spaceBetween: 16 },
                            768: { spaceBetween: 24 },
                            1200: { spaceBetween: 32 },
                        }}
                    >
                        {DATA.map(({ texto, autor }, i) => (
                            <SwiperSlide key={i}>
                                <div className="testi-slide text-center ">
                                    <div className="testi-quote">”</div>
                                    <p className="testi-text">{texto}</p>
                                    <p className="testi-author">{autor}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </Container>
        </section>
    );
}
