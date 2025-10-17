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
                            <h3 className="color-font fw-bold">Vigilancia de frontera y control de actividades ilegales</h3>
                            <ul>
                                <li>Con sistemas de información geográfica (SIG) marítimos y sensores remotos (satélites y drones) se facilita el mapeo y análisis de datos marinos, incluyendo corrientes oceánicas, características del fondo marino, y rutas de navegación.</li>
                                <li>Monitoreo de actividades marítimas en tiempo real, como pesca ilegal, tráfico de embarcaciones, y detección de derrames de petróleo.</li>
                            </ul>
                        </Col>
                        <Col lg={6} md={12}>
                            <h3 className="color-font fw-bold">Monitoreo de tráfico marino y rutas de navegación</h3>
                            <ul>
                                <li>Gestión y supervisión del tráfico de embarcaciones para evitar colisiones y mejorar la seguridad en rutas marítimas congestionadas.</li>
                                <li>Los sistemas de posicionamiento global (GPS) y los datos AIS (Automatic Identification System) ayudan a mejorar la seguridad de la navegación.</li>
                            </ul>
                        </Col>

                        <Col lg={6} md={12}>
                            <h3 className="color-font fw-bold">
                                Desarrollo y ejecución de obras</h3>
                            <ul>
                                <li>Aplicación de modelado y predicción de corrientes y mareas. Son herramientas clave para la navegación y la planificación costera.</li>
                                <li>A través de cartografía marina y batimetría se crean mapas detallados del fondo marino y las características submarinas, esenciales para la navegación segura y la planificación de infraestructuras.</li>
                            </ul>
                        </Col>
                        <Col lg={6} md={12}>
                            <h3 className="color-font fw-bold">Control ambiental y de desastres naturales</h3>
                            <ul>
                                <li>Supervisión de la calidad del agua, salud de los ecosistemas marinos, y detección temprana de desastres ambientales.</li>
                                <li>Predicción y simulación de eventos catastróficos para mejorar la respuesta a emergencias y la planificación de evacuaciones.</li>
                                <li>Herramientas para la coordinación de operaciones de rescate, limpieza de derrames de petróleo, y otras emergencias marítimas.</li>
                                <li>Evaluación y gestión de recursos como pesquerías, minerales y energía oceánica, garantizando un uso sostenible.</li>
                            </ul>
                        </Col>


                    </Row>
                </Container>
            </section>

        </>
    )
}

export default BloqueTexto