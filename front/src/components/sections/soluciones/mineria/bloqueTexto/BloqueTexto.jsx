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
                            <h3 className="color-font fw-bold">Supervisión de infraestructuras y zonas de producción</h3>
                            <ul>
                                <li>Relevamiento y detección de problemas en áreas de extracción. Inspección de ductos.</li>
                                <li>Inspección de ductos.</li>
                                <li>Identificación de yacimientos: Las imágenes satelitales y los sistemas GIS permiten identificar áreas con alto potencial mineral mediante análisis geológicos</li>
                                <li>Mapear y estudiar áreas remotas o de difícil acceso sin necesidad de exploración física, reduciendo costos y riesgos.</li>
                                <li>Modelado 3D del subsuelo: El geoprocesamiento permite generar modelos tridimensionales del subsuelo para planificar mejor las perforaciones y minimizar el material no deseado extraído.</li>
                            </ul>
                            <h3 className="color-font fw-bold">Relevamiento de condiciones ambientales</h3>
                            <ul>
                                <li>Revisión de áreas de interés con alertas sobre condiciones ambientales.</li>
                                <li>Procesamiento de una serie de imágenes satelitales que derivan en un informe que detecta riesgos en el cumplimiento de ciertas normativas.</li>
                            </ul>

                        </Col>
                        <Col lg={6} md={12}>
                            <h3 className="color-font fw-bold">Seguimiento de obras/proyectos</h3>
                            <ul>
                                <li>Monitoreo de avances de proyectos de explotación minera.</li>
                                <li>Detección de accidentes o fallas en diferentes etapas a través de imágenes que registran períodos específicos de la producción.</li>
                                <li>Seguimiento en tiempo real. Esto es fundamental para atender con urgencia accidentes que puedan ocurrir en el momento de producción.</li>
                            </ul>
                            <h3 className="color-font fw-bold">Seguimiento de obras/proyectos</h3>
                            <ul>
                                <li>Prevención de hundimientos y deslizamientos: La interferometría o tecnología InSAR permite monitorear el movimiento del terreno, detectando subsidencias o desplazamientos provocados por la minería subterránea, lo que previene desastres geológicos y protege infraestructuras.</li>
                            </ul>
                        </Col>


                    </Row>
                </Container>
            </section>

        </>
    )
}

export default BloqueTexto