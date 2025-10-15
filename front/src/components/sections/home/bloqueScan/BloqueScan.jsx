import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// imagenes 
import img1 from '../../../../assets/img/home/bloqueScan/img1.webp';
import img2 from '../../../../assets/img/home/bloqueScan/img2.webp';
import img3 from '../../../../assets/img/home/bloqueScan/img3.webp';
import img4 from '../../../../assets/img/home/bloqueScan/img4.webp';


function BloqueScan() {
    return (
        <>
            <section className="container-fluid py-4 text-center">
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col lg={6} md={12} className='mb-4'>
                            <h3 className="color-font text-uppercase fw-bold">SCANRIESGO</h3>
                            <img src={img1} alt="imagen de Scan Riesgo" loading='lazy' className='img-fluid mb-3' />
                            <p className="color-font">Estudio que permite conocer objetivamente el riesgo de su campo en relación a la calidad del suelo, el relieve, la frecuencia de anegamiento y sequía con información satelital de más de 20 años.</p>
                        </Col>
                        <Col lg={6} md={12} className='mb-4'>
                            <h3 className="color-font text-uppercase fw-bold">SCANAGROEMPRESA</h3>
                            <img src={img2} alt="imagen de Scan Agroempresa" loading='lazy' className='img-fluid mb-3' />
                            <p className="color-font">Proveemos una solución orientada a mejorar la gestión de información clave en una empresa agropecuaria, tanto a nivel comercial y de marketing, como en sus facetas productivas.</p>
                        </Col>
                        <Col lg={6} md={12} className='mb-4'>
                            <h3 className="color-font text-uppercase fw-bold">SCANREGIONAL</h3>
                            <img src={img3} alt="imagen deScan Regional" loading='lazy' className='img-fluid mb-5' />
                            <p className="color-font">Estudio que permite contar con información de alto valor agregado
                                sobre macro regiones para tomar mejores decisiones productivas.</p>
                        </Col>
                        <Col lg={6} md={12} className='mb-4'>
                            <h3 className="color-font text-uppercase fw-bold">SCANPRODUCTIVIDAD</h3>
                            <img src={img4} alt="imagen Scan productividad" loading='lazy' className='img-fluid mb-5' />
                            <p className="color-font">Conocer a fondo su campo, el potencial productivo, la variabilidad intra-lotes y optimizar el uso de sus recursos es una necesidad clave del productor a lo largo de todas las etapas productivas de su negocio.</p>
                        </Col>
                        <Col lg={12} className='d-flex justify-content-center mt-4'>
                            <div>
                                <Link to="/agroindustria" className='boton-web btn-responsive btn text-uppercase'>ver todas las soluciones para el agro</Link>
                            </div>
                        </Col>
                    
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BloqueScan;