import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// estilo
import './QueHacemos.css';

// imagenes 
import img from '../../../../../assets/img/soluciones/gobierno/img1.webp';

function QueHacemos() {

    return (
        <>
            <section className="container-fluid py-5 ">
                <Container>
                    <h1 className="font-celeste fw-bold text-center mb-4">¿QUÉ HACEMOS?</h1>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col lg={6} md={12}>
                            <p>La tecnología geoespacial y diferentes tipos de geoprocesamiento en el área de gobierno son una herramienta clave para mejorar la gestión pública y la toma de decisiones en diversos sectores. Es esencial para la planificación estratégica, la gestión de recursos, la seguridad pública, y el desarrollo sostenible, mejorando la eficiencia y efectividad de las políticas públicas.</p>
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