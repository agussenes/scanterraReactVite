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
                            <h3 className="color-font fw-bold">Exploración y mapeo preciso de yacimientos/centrales de producción</h3>
                            <ul>
                                <li>Petróleo y gas: Brindamos una serie de soluciones que optimizan la extracción y reducen costos operativos.</li>
                                <li>En el ámbito de la electricidad, se facilita la planificación y monitoreo de redes de distribución, mejorando la eficiencia y la gestión de cortes o fallas. Además, ayuda en la identificación de ubicaciones óptimas para infraestructura energética, como plantas de energía renovable, y en la evaluación de riesgos ambientales, garantizando operaciones más seguras y sostenibles.</li>
                                <li>Detección de zonas inaccesibles o dónde no hay un desarrollo de rutas y caminos que faciliten la instalación de maquinaria, transporte y trabajo de obra.</li>

                            </ul>


                        </Col>
                        <Col lg={6} md={12}>
                            <h3 className="color-font fw-bold">Supervisión ambiental y de otros riesgos</h3>
                            <ul>
                                <li>Detección de emisiones de gases de efecto invernadero: Monitoreo en tiempo real de emisiones de dióxido de carbono (CO2) y metano (CH4). Esto contribuye al cumplimiento de normas ambientales.</li>
                                <li>En el caso de oleoductos se pueden detectar derrames. Las imágenes satelitales térmicas e infrarrojas pueden detectar fugas de petróleo en cuerpos de agua.</li>
                                <li>Relevamiento de zonas de ríos que supongan riesgos de anegamiento por inundación o puedan provocar peligros para la instalación de infraestructura y el trabajo de obra.</li>
                            </ul>

                        </Col>

                        <Col lg={6} md={12}>
                            <h3 className="color-font fw-bold">Monitoreo de zonas de trabajo</h3>
                            <ul>
                                <li>Seguimiento de etapas y acciones de trabajo en obra. Se pueden detectar accidentes, delitos o fallas. Se aplica con variables temporales que se procesan en informes sencillos o plataformas en tiempo real que permiten tomar decisiones.</li>
                                <li>Detección de grietas o desplazamientos en oleoductos, líneas eléctricas y otras infraestructuras clave, reduciendo la necesidad de inspecciones in situ y permitiendo un mantenimiento más eficiente.</li>
                            </ul>
                        </Col>
                        <Col lg={6} md={12}>
                            <h3 className="color-font fw-bold">Gestión del suelo</h3>
                            <ul>
                                <li>Usando la tecnología InSAR (Interferometría de radar satelital), es posible medir con gran precisión el hundimiento del terreno causado por la extracción de petróleo, gas o agua subterránea. Esto ayuda a prevenir daños en infraestructura, prediciendo cuándo y dónde ocurrirá el desplazamiento.</li>
                            </ul>
                        </Col>

                    </Row>
                </Container>
            </section>

        </>
    )
}

export default BloqueTexto