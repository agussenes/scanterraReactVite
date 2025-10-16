import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// estilo
import './QueHacemos.css';

// imagenes 
import img from '../../../../../assets/img/soluciones/agroindustria/imgQH.webp';

function QueHacemos() {

    return (
        <>
            <section className="container-fluid pt-5 ">
                <Container>
                    <h1 className="font-celeste fw-bold text-center mb-4">¿QUÉ HACEMOS?</h1>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col lg={6} md={12}>
                            <p>Brindamos soluciones aplicadas y testeadas a campo para el productor y la empresa que se dedica al agro. Contamos con la más amplia suite de soluciones geoespaciales aplicadas y desarrollada a partir de necesidades reales de nuestros clientes más exigentes.
                                Con el uso de imágenes satelitales y distintas fuentes de información aplicamos geoprocesos que terminan en informes concretos para una estratégica toma de decisión.</p>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="d-flex justify-content-center">
                                <img src={img} alt="imagen de que hacemos en la solucion agroindustria de Scanterra" loading='lazy' className='img-fluid imgQH' />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

        </>
    )
}

export default QueHacemos;