import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// estilo
import './QueHacemos.css';

// imagenes 
import img from '../../../../../assets/img/soluciones/energia/img1.webp';

function QueHacemos() {

    return (
        <>
            <section className="container-fluid py-5 ">
                <Container>
                    <h1 className="font-celeste fw-bold text-center mb-4">¿QUÉ HACEMOS?</h1>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col lg={6} md={12}>
                            <p>En esta industria trabajamos principalmente en el sector de electricidad, gas y petróleo.<br /> <br />
                                Nuestras soluciones están orientadas al monitoreo de infraestructura, evaluación de riesgos, monitoreo de energías renovables, control de condiciones ambientales, delimitación territorial, entre otras. Abordamos soluciones con procesamiento de imágenes satelitales, información de diferentes fuentes, interferometría y otros tipos de desarrollo.</p>
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