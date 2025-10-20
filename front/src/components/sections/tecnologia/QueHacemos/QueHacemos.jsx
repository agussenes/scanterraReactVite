import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// estilo
import './QueHacemos.css';

// imagen Q hacemos 
import img from '../../../../assets/img/tecnologia/imgQhacemos.webp'

function QueHacemos() {
    return (
        <>
            <section className="container-fluid pt-5 ">
                <Container>
                    <h1 className="font-celeste fw-bold text-center mb-4">¿QUÉ HACEMOS?</h1>
                    <Row className='d-flex'>
                        <Col lg={6} md={12} >
                            <p>Nuestra amplia suite de soluciones geoespaciales incluye diferentes desarrollos y aplicaciones tecnológicas. Se adaptan a la necesidad de cada proyecto. Nuestras tecnologías son:</p>
                            <p className="bajadaQHT color-font lead">ScanTerra Geo Plataforma.</p>
                            <p className="bajadaQHT color-font lead">ScanTerra API.</p>
                            <p className="bajadaQHT color-font lead">ScanTerra Satelital.</p>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="d-flex justify-content-center">
                                <img src={img} alt="imagen de Nuestra amplia suite de soluciones geoespaciales incluye diferentes desarrollos y aplicaciones tecnológicas" loading='lazy' className='img-fluid rounded' />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <p className="bajadaQHT color-font lead">Capacitación y soporte</p>
                            <p>Ofrecemos un servicio exclusivo de capacitación y soporte adecuado a tu empresa y objetivos de negocio</p>
                            <p><strong>Acompañamiento en la implementación:</strong>Garantizamos un grupo de expertos que hacen un seguimiento del proceso de implementación de la tecnología y que es completamente adaptable a la plataforma que utilices o a las capacidades de tu equipo.</p>
                            <p><strong>Curva de aprendizaje ágil:</strong>Capacitamos a tu equipo para que, en el menor tiempo posible, aprenda a integrar la tecnología a sus procesos de trabajo.</p>
                            <p><strong>Soporte local:</strong>Ante cualquier problema o necesidad, contás con un equipo técnico de soporte que te atiende de forma ágil, certera y en tu mismo idioma y huso horario.</p>

                        </Col>

                    </Row>
                </Container>
            </section>

        </>
    )
}

export default QueHacemos;