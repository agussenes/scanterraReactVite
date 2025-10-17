import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function BloqueTexto() {
    return (
        <>
            <section className="container-fluid pt-3 ">
                <Container>
                    <h1 className="font-celeste fw-bold text-center mb-5">SOLUCIONES ESPECÍFICAS</h1>
                    <Row className='d-flex '>
                        <Col lg={6} md={12}>
                            <h3 className="color-font fw-bold">Vigilancia y control de fronteras</h3>
                            <ul>
                                <li>Detección temprana de amenazas</li>
                                <li>Gestión de crisis mediante la recopilación y análisis de datos en tiempo real.</li>
                                <li>Facilita la planificación y ejecución de operaciones militares con precisión, optimizando la coordinación y despliegue de recursos.</li>
                            </ul>
                        </Col>
                        <Col lg={6} md={12}>
                            <h3 className="color-font fw-bold">Mayor eficiencia para áreas de seguridad e inteligencia</h3>
                            <ul>
                                <li>Provisión de herramientas para áreas de seguridad nacional mediante la identificación de patrones de actividad sospechosa y la respuesta rápida a emergencias.</li>
                            </ul>
                        </Col>


                        <Col lg={12} md={12}>
                            <h3 className="color-font fw-bold">Búsquedas en grandes zonas de rastreo</h3>
                            <ul>
                                <li>En áreas de interés de casos policiales o seguridad nacional se utilizan imágenes satelitales con la aplicación de procesamientos de tiempo, ubicación y espacio.</li>
                                <li>Registro de varias imágenes satelitales fijadas en zonas designadas por la investigación.</li>
                                <li>Repetición de imágenes por un cierto período de tiempo. Recopilación de la información satelital y análisis comparativo de frecuencia diaria.</li>
                                <li>Posibilidad de visualizar la ubicación exacta de objetos y espacios. Esto permite calcular distancias y recorridos.</li>
                            </ul>
                        </Col>

                    </Row>
                </Container>
            </section>

        </>
    )
}

export default BloqueTexto