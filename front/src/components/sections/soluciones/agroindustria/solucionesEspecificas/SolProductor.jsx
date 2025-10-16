import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// estilo
import './SolProductor.css';

// imagenes 
import img1 from '../../../../../assets/img/soluciones/agroindustria/solProductor/ScanProductividad.webp';
import txt1 from '../../../../../assets/img/soluciones/agroindustria/solProductor/textScanProduc.webp';
import imgm1 from '../../../../../assets/img/soluciones/agroindustria/solProductor/ScanProductividadM.webp';
import img2 from '../../../../../assets/img/soluciones/agroindustria/solProductor/ScanRiesgo.webp';
import txt2 from '../../../../../assets/img/soluciones/agroindustria/solProductor/textScanRiesgo.webp';
import imgm2 from '../../../../../assets/img/soluciones/agroindustria/solProductor/ScanRiesgoM.webp';
import img3 from '../../../../../assets/img/soluciones/agroindustria/solProductor/ScanControl.webp';
import txt3 from '../../../../../assets/img/soluciones/agroindustria/solProductor/textScanControl.webp';
import imgm3 from '../../../../../assets/img/soluciones/agroindustria/solProductor/ScanControlM.webp';
import img4 from '../../../../../assets/img/soluciones/agroindustria/solProductor/ScanRelevamiento.webp';
import txt4 from '../../../../../assets/img/soluciones/agroindustria/solProductor/textScanRelevamiento.webp';
import imgm4 from '../../../../../assets/img/soluciones/agroindustria/solProductor/ScanRelevamientoM.webp';
import img5 from '../../../../../assets/img/soluciones/agroindustria/solProductor/ScanGeogestion.webp';
import txt5 from '../../../../../assets/img/soluciones/agroindustria/solProductor/textScanGeogestion.webp';
import imgm5 from '../../../../../assets/img/soluciones/agroindustria/solProductor/ScanGeogestionM.webp';


function SolProductor() {
    return (
        <>
            <section className="container-fluid ">
                <Container>
                    <h1 className="font-celeste fw-bold text-center mb-5">SOLUCIONES ESPECIFICAS PARA <br className='ocultarEnMobile' />
                        EL PRODUCTOR AGROPECUARIO</h1>
                    <Row className='d-flex justify-content-center align-items-center '>
                        <Col lg={6} md={12} className='d-flex justify-content-center mb-4'>
                            <Row className='d-flex align-items-center justify-content-center'>
                                <Col lg={4} className='mb-4 ocultarEnMobile'>
                                    <img src={img1} alt="imagen de icono de Scan Productividad Scanterra" loading='lazy' className='img-fluid' />
                                </Col>
                                <Col lg={8} className='d-flex flex-column contenedorSoluciones'>
                                    <div className=''>
                                        <img src={txt1} alt="imagen de texto de Scan Productividad Scanterra" loading='lazy' className='ocultarEnMobile' />
                                        <img src={imgm1} alt="imagen mobile de texto de Scan Productividad Scanterra" loading='lazy' className='ocultarEnPc' />
                                    </div>
                                    <div className="mt-3 centrarMobile">
                                        <Link to='/scanproductividad' className='btn boton-web text-uppercase'>Más info</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} className=''>
                            <p className="fw-semibold color-font  centrarMobile fontSoluciones">
                                Ideal para determinar productividad actual vs. potencial, aumentar sus rendimientos, optimizar el uso de recursos e insumos, conocer variabilidad intra-lotes y conocer en detalle todo lo que su campo puede dar.
                            </p>
                            <div className="hrCustom my-4"></div>
                        </Col>

                    </Row>
                    <Row className="align-items-center justify-content-center mt-4">
                        <Col lg={6} md={4} xs={12} className="mb-3 mb-lg-0  d-flex justify-content-center align-items-center ">
                            <Row className='d-flex align-items-center justify-content-center'>
                                <Col lg={4} className='mb-4 ocultarEnMobile'>
                                    <img src={img2} alt="Scan Riesgo" className="img-fluid icono p-1" loading="lazy" />
                                </Col>
                                <div className='contenedorImGTxtImg col-lg-8 d-flex flex-column align-items-lg-start'>
                                    <div className='d-flex justify-content-center centrarMobile'>
                                        <img src={txt2} alt="Texto Scan Riesgo" className="img-fluid ocultarEnMobile" loading="lazy" />
                                        <img src={imgm2} alt="imagen mobile de texto de Scan Productividad Scanterra" loading='lazy' className='ocultarEnPc img-fluid' />

                                    </div>
                                    <div className="mt-3 centrarMobile">
                                        <Link to="/scanriesgo" className="btn boton-web text-uppercase">Más info</Link>
                                    </div>
                                </div>
                            </Row>

                        </Col>
                        <Col lg={6} md={8} xs={12} className="d-flex flex-column contenedorSoluciones">
                            <div className="d-flex flex-column h-100">
                                <p className="fw-semibold color-font centrarMobile fontSoluciones">
                                    Desarrollado para quienes desean administrar eficientemente el riesgo inherente a toda actividad agropecuaria. Permite conocer la estabilidad y comportamiento de su campo (suelo, agua, sequía), conocer la frecuencia y magnitud de anegamientos, y en general, invertir con mayor seguridad.
                                </p>
                                <div className="hrCustom my-4"></div>
                            </div>

                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-center mt-4">
                        <Col lg={6} md={4} xs={12} className="mb-3 mb-lg-0  d-flex justify-content-center align-items-center ">
                            <Row className='d-flex align-items-center justify-content-center'>
                                <Col lg={4} className='mb-4 ocultarEnMobile'>
                                    <img src={img3} alt="Scan Riesgo" className="img-fluid icono p-1" loading="lazy" />
                                </Col>
                                <div className='contenedorImGTxtImg col-lg-8 d-flex flex-column align-items-lg-start'>
                                    <div className='d-flex justify-content-center centrarMobile'>
                                        <img src={txt3} alt="Texto Scan Riesgo" className="img-fluid ocultarEnMobile" loading="lazy" />
                                        <img src={imgm3} alt="imagen mobile de texto de Scan Productividad Scanterra" loading='lazy' className='ocultarEnPc img-fluid' />

                                    </div>
                                    <div className="mt-3 centrarMobile">
                                        <Link to="/scancontrol" className="btn boton-web text-uppercase">Más info</Link>
                                    </div>
                                </div>
                            </Row>

                        </Col>
                        <Col lg={6} md={8} xs={12} className="d-flex flex-column contenedorSoluciones">
                            <div className="d-flex flex-column h-100">
                                <p className="fw-semibold color-font centrarMobile fontSoluciones">
                                   Conozca el estado y evolución de sus cultivos durante toda la campaña y verifique a campo su estado para tomar las decisiones más oportunas y convenientes en cuánto a manejo, aplicaciones, tiempo ideal de cosecha y más.
                                </p>
                                <div className="hrCustom my-4"></div>
                            </div>

                        </Col>
                    </Row>
                    
                    <Row className='d-flex justify-content-center align-items-center mt-5'>
                        <Col lg={6} md={12} className='d-flex justify-content-center mb-4'>
                            <Row className='d-flex align-items-center justify-content-center'>
                                <Col lg={4} className='mb-4 ocultarEnMobile'>
                                    <img src={img4} alt="imagen de icono de Scan Productividad Scanterra" loading='lazy' className='img-fluid ' />
                                </Col>
                                <Col lg={8} className='d-flex flex-column contenedorSoluciones'>
                                    <div>
                                        <img src={txt4} alt="imagen de texto de Scan Productividad Scanterra" loading='lazy' className='ocultarEnMobile' />
                                        <img src={imgm4} alt="imagen mobile de texto de Scan Productividad Scanterra" loading='lazy' className='ocultarEnPc ' />
                                    </div>
                                    <div className="mt-3 centrarMobile">
                                        <Link to='/scanrelevamiento' className='btn boton-web text-uppercase'>Más info</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12}>
                            <p className="fw-semibold color-font centrarMobile fontSoluciones">
                                Obtenga información objetiva y en detalle del potencial productivo, de la evaluación de anegamientos, del historial de lote, de relieves y del croquis para conocer a fondo el bien de trabajo más valioso que tiene todo productor agropecuario, su campo.
                            </p>
                            <div className="hrCustom my-4"></div>
                        </Col>

                    </Row>
                    <Row className='d-flex justify-content-center align-items-center mt-5'>
                        <Col lg={6} md={12} className='d-flex justify-content-center mb-4'>
                            <Row className='d-flex align-items-center justify-content-center'>
                                <Col lg={4} className='mb-4 ocultarEnMobile'>
                                    <img src={img5} alt="imagen de icono de Scan Productividad Scanterra" loading='lazy' className='img-fluid ' />
                                </Col>
                                <Col lg={8} className='d-flex flex-column contenedorSoluciones'>
                                    <div>
                                        <img src={txt5} alt="imagen de texto de Scan Productividad Scanterra" loading='lazy' className='ocultarEnMobile' />
                                        <img src={imgm5} alt="imagen mobile de texto de Scan Productividad Scanterra" loading='lazy' className='ocultarEnPc ' />
                                    </div>
                                    <div className="mt-3 centrarMobile">
                                        <Link to='/scangeogestion' className='btn boton-web text-uppercase'>Más info</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12}>
                            <p className="fw-semibold color-font centrarMobile fontSoluciones">
                                Es un servicio simple, full web con acceso desde cualquier dispositivo, que permite gestionar privada y colaborativamente, con su equipo de trabajo, toda la información georeferenciada de su campo. Desde mapas de lotes, ambientes, mapas de rendimiento, etc. hasta las visitas georeferenciadas a los lotes. Incluye aplicación web y móvil para smartphones, tablets y PCs desktop.
                            </p>

                        </Col>

                    </Row>

                </Container>
            </section>

        </>
    )
}

export default SolProductor;