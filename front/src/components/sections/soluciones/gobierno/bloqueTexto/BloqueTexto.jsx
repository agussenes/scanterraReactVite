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
                            <h3 className="color-font fw-bold">Infraestructura en obras públicas</h3>
                            <ul>
                                <li>Se brinda información satelital precisa de las condiciones para desarrollar obras de todo tipo: gestión de pavimento, luminarias (postes de cableado eléctrico y cabinas), redes cloacales, de agua potable, de gas, etc.</li>
                                <li>Se entregan informes detallados para empresas privadas y áreas de gobierno que tienen que tomar decisiones clave de inversión en obra pública.</li>
                            </ul>
                            <h3 className="color-font fw-bold">Catastro y recaudación</h3>
                            <ul>
                                <li>El uso de diferentes tecnologías optimiza la recaudación fiscal mediante el mapeo y análisis de contribuciones tributarias y la identificación de propiedades y terrenos.</li>
                                <li>Vinculación automática entre una aplicación móvil desarrollada específicamente para el municipio con el sistema de recaudación. La aplicación contiene una plataforma de información sencilla y tableros de control que pueden mejorar las formas de recaudar.</li>
                                <li>Desarrollo de un mapa de contribución tributaria, análisis de deuda e inteligencia fiscal.</li>
                                <li>Detección de terrenos fiscales, privados legales y reales. Monitoreo de terrenos con potencial de riesgo de usurpación.</li>
                                <li>Delimitación territorial precisa de urbanizaciones privadas, territorios rurales, asentamientos y otros tipos de desarrollos en ciudad y zonas de campo.</li>
                            </ul>
                        </Col>
                        <Col lg={6} md={12}>
                            <h3 className="color-font fw-bold">Seguridad</h3>
                            <ul>
                                <li>Creación de mapas del delito y gestión de cámaras de vigilancia.</li>
                                <li>Coordinación de la ubicación de comisarías y puntos de control, mejorando la prevención y respuesta ante el crimen.</li>
                            </ul>
                            <h3 className="color-font fw-bold">Educación y deporte</h3>
                            <ul>
                                <li>Ubicación y gestión de centros educativos y deportivos, optimizando la infraestructura social.</li>
                            </ul>
                            <h3 className="color-font fw-bold">Medio ambiente y territorio</h3>
                            <ul>
                                <li>Gestión eficiente del uso de la tierra (público/privado, urbano/rural, reservas, esparcimiento, etc.)</li>
                            <li>Información precisa para el planeamiento urbano y rural.</li>
                            <li>Topografía (Relieve, curvas de nivel) e identificación precisa de ríos, arroyos y canales. Esto incluye ubicación de zonas con riesgo de anegamiento</li>
                            </ul>
                            <h3 className="color-font fw-bold">Salud</h3>
                            <ul>
                                <li>Mapeo de centros de atención pública y privada, redes de farmacia y turnos de guardia.</li>
                                <li>Higiene urbana y detección de zonas de vulnerabilidad de la población.</li>
                            </ul>
                        </Col>

                        <Col lg={6} md={12}>
                            <h3 className="color-font fw-bold">Desarrollo económico y Turismo</h3>
                            <ul>
                                <li>La tecnología geoespacial permite identificar y gestionar áreas de interés como parques industriales, sitios turísticos, polos gastronómicos y establecimientos de alojamiento, potenciando el desarrollo local.</li>
                            </ul>
                            <h3 className="color-font fw-bold">Servicios sociales</h3>
                            <ul>
                                <li>
                                    Mapeo de redes de comedores, clubes sociales-deportivos y agrupaciones Sociales (cooperativas, centros culturales, centros religiosos, etc.)
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6} md={12}>
                            <h3 className="color-font fw-bold">Vialidad y transporte</h3>
                            <ul>
                                <li>Detección de rutas y caminos para ferrocarriles y cualquier tipo de transporte urbano.</li>
                                <li>Monitoreo de tráfico en tiempo real y seguimiento del desarrollo de obras.</li>
                            </ul>
                            <h3 className="color-font fw-bold">Social demográfico</h3>
                            <ul>
                                <li>Relevamiento histórico y en tiempo real de la densidad poblacional.</li>
                                <li>Creación de mapas que definen grupos por nivel socio-económico, socio-cultural (alfabetismo) y etario.</li>
                            </ul>

                        </Col>


                    </Row>
                </Container>
            </section>

        </>
    )
}

export default BloqueTexto