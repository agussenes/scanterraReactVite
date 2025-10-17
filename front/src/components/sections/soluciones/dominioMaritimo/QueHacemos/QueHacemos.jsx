import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// estilo
import './QueHacemos.css';

// imagenes 
import img from '../../../../../assets/img/soluciones/dominioMaritimo/img1.webp';

function QueHacemos() {

    return (
        <>
            <section className="container-fluid py-5 ">
                <Container>
                    <h1 className="font-celeste fw-bold text-center mb-4">¿QUÉ HACEMOS?</h1>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col lg={6} md={12}>
                            <p>Brindamos soluciones que ayudan en la gestión y protección del dominio marítimo: Monitorear, analizar y gestionar vastas áreas oceánicas y costeras de manera efectiva. Se pueden resolver una amplia gama de problemas como la vigilancia de fronteras marítimas, detección y prevención de actividades ilegales (como la pesca no regulada o el tráfico marítimo), planificación y gestión de infraestructuras costeras, conservación de ecosistemas marinos y respuesta a desastres naturales como tsunamis, entre otros.</p>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="d-flex justify-content-center">
                                <img src={img} alt="imagen de que hacemos en la solucion agroindustria de Scanterra" loading='lazy' className='img-fluid rounded imgQH' />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

        </>
    )
}

export default QueHacemos;