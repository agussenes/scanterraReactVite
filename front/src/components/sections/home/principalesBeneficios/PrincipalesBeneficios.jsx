import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// stilos 
import './PrincipalesBeneficios.css';

function PrincipalesBeneficios() {
    return (
        <>
            <section className="container-fluid p-0">
                <Container fluid className='bg-celeste m-0 p-0 py-2'>
                    <h1 className='text-center text-light fw-bold text-uppercase'>PRINCIPALES BENEFICIOS</h1>
                </Container>
                <Container fluid className='p-0 m-0 contenedorUl'>
                    <Row className='m-0 p-0'>
                        <Col md={12} lg={6} className='bg-gris m-0'>
                            <Container className='contenedorContainer color-font py-4 '>
                                <h2 className='fw-bold mb-3'>Para el productor agropecuario</h2>
                                <ul className="color-font contenedorMaxUl">
                                    <li>Aumento de la rentabilidad por el mejor uso y gestión
                                        de recursos, insumos y tiempo.</li>
                                    <li>Mayor facilidad para la toma de decisiones a través
                                        de información objetiva y de alto valor agregado.</li>
                                    <li>Mayor certeza en la operación de negocios.</li>
                                    <li>Mejora en la capacidad de previsión al realizar un control objetivo y permanente de cultivos.</li>
                                </ul>
                            </Container>
                        </Col>
                        <Col md={12} lg={6} className='bg-custom '>
                            <Container className='contenedorContainer2 font-gris py-4'>
                                <h2 className='fw-bold mb-3'>Para las empresas agro</h2>
                                <ul className='contenedorMaxUl'>
                                    <li>Mejor administración del riesgo financiero y asegurado.</li>
                                    <li>Optimización de políticas comerciales y mejor gestión
                                        de seguimiento de ventas.</li>
                                    <li>Evaluación de pérdidas ante situaciones climáticas
                                        o de siniestros.</li>
                                </ul>
                            </Container>

                        </Col>
                    </Row>

                </Container>
            </section>


        </>
    )
}

export default PrincipalesBeneficios;