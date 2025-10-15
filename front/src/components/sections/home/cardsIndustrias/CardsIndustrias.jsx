import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardsIndustrias.css";

import mineria from "../../../../assets/img/home/cardsIndustria/mineria.webp";
import energia from "../../../../assets/img/home/cardsIndustria/energia.webp";
import gobierno from "../../../../assets/img/home/cardsIndustria/gobierno.webp";
import defensaInteligencia from "../../../../assets/img/home/cardsIndustria/defensaInteligencia.webp";
import DomMaritimo from "../../../../assets/img/home/cardsIndustria/dominioMaritimo.webp";

const items = [
    { img: mineria, titulo: "Minería", link: "/mineria" },
    { img: energia, titulo: "Energía", link: "/energia" },
    { img: gobierno, titulo: "Gobierno", link: "/gobierno" },
    { img: defensaInteligencia, titulo: "Defensa e Inteligencia", link: "/defensa-y-seguridad" },
    { img: DomMaritimo, titulo: "Dominio Marítimo", link: "/dominio-maritimo" },
];

export default function CardsIndustrias() {
    return (
        <section className="container-fluid py-4 text-center">
            <Container>
                <h1 className="text-center font-celeste fw-bold mb-5 text-uppercase">Otras industrias</h1>
                {/* row-cols: xs=1, sm=2, md=3, lg=5 */}
                <Row xs={1} sm={2} md={3} lg={5} className="g-3 justify-content-center">
                    {items.map(({ img, titulo, link }, i) => (
                        <Col key={i}>
                            <div className="position-relative contenedorBannerImagen">
                                <img src={img} alt={titulo} className="w-100 d-block" />

                                {/* overlay */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end justify-content-center text-center contenerOver"
                                    
                                >
                                    <div className="mb-3 px-2">
                                        <h2 className="text-white fw-bold m-0 tituloCards">{titulo}</h2>
                                        <Link to={link} className="btn btn-Cards rounded-pill mt-2">
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
