import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// estilo
import './Resumen.css';


function Resumen({txtBold, bajada, img}) {
    return (
        <>
            <section className="container-fluid py-5 ">
                <Container>
                    <h1 className="font-celeste fw-bold text-center mb-4">RESUMEN</h1>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col lg={6} md={12}>
                            <p className="fw-bold">{txtBold}</p>
                            <p>{bajada}</p>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="d-flex justify-content-center">
                                <img src={img} alt="imagen de que hacemos en la solucion agroindustria de Scanterra" loading='lazy' className='img-fluid rounded' />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Resumen;