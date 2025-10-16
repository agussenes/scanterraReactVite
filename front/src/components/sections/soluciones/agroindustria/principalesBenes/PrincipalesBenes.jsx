import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// stilos 
import './PrincipalesBenes.css';

function PrincipalesBenes() {
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
                                    <li>Mayor rentabilidad por el mejor uso y gestión eficiente de sus recursos, insumos y su tiempo.</li>
                                    <li>Mejor toma general de decisiones a partir de información objetiva y de alto valor agregado.</li>
                                    <li>Mayor certeza en la operación de su negocio.</li>
                                    <li>Mayor previsibilidad al realizar un control objetivo y permanente de sus cultivos.</li>
                                    <li>Reducción del riesgo inherente a la actividad agropecuaria.</li>
                                    <li>Mayor eficiencia y simplicidad en la gestión de la información geoespacial de su campo.</li>
                                </ul>
                            </Container>
                        </Col>
                        <Col md={12} lg={6} className='bg-custom '>
                            <Container className='contenedorContainer2 font-gris py-4'>
                                <h2 className='fw-bold mb-3'>Para las empresas agro</h2>
                                <ul className='contenedorMaxUl'>
                                    <li>Mejor administración del riesgo financiero y asegurado.</li>
                                    <li>Evaluación de pérdidas ante situaciones climáticas o de siniestros.</li>
                                    <li>Optimización de políticas comerciales y mejor gestión de seguimiento de ventas.</li>
                                    <li>Análisis de auditoría geoespaciales de suscripción y siniestros.</li>
                                    <li>Análisis de market share y armado de estrategias de marketing.</li>
                                    <li>Permite aprender de la experiencia e información histórica.</li>
                                    <li>Facilita el trabajo bajo protocolos de gestión unificados e integrados a los procesos de su empresa.</li>
                                    <li>Aumento de la capacidad de trabajo y reducción de costos operativos.</li>
                                    <li>Estudios y análisis regionales sobre los potenciales productivos de las regiones y su evolución en el tiempo.</li>
                                    <li>Fidelización de clientes y del canal de distribución a partir de servicios informativos de alto valor agregado.</li>
                                </ul>
                            </Container>

                        </Col>
                    </Row>

                </Container>
            </section>


        </>
    )
}

export default PrincipalesBenes;