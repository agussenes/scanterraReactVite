import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// estilo
import './QueHacemos.css';

// imagenes 
import img from '../../../../../assets/img/soluciones/defensaSeguridad/img1.webp';

function QueHacemos() {

    return (
        <>
            <section className="container-fluid py-5 ">
                <Container>
                    <h1 className="font-celeste fw-bold text-center mb-4">¿QUÉ HACEMOS?</h1>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col lg={6} md={12}>
                            <p>El área de defensa y seguridad demanda información precisa y que esté disponible de forma urgente: La toma de decisiones es extremadamente importante y se deben contemplar la mayor cantidad de variables posibles en cuánto a riesgos y certezas.
Ofrecemos soluciones avanzadas para el monitoreo, análisis y protección de territorios. Con imágenes satelitales y la aplicación de geoprocesamientos se puede trabajar:</p>
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