import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// estilo
import './SolProductor.css';

// imagenes 
import img1 from '../../../../../assets/img/soluciones/agroindustria/SolEmpresas/ScanAgroempresa.webp';
import txt1 from '../../../../../assets/img/soluciones/agroindustria/SolEmpresas/TxtScanAgroempresa.webp';
import imgm1 from '../../../../../assets/img/soluciones/agroindustria/SolEmpresas/ScanAgroempresaM.webp';
import img2 from '../../../../../assets/img/soluciones/agroindustria/SolEmpresas/ScanSeguros.webp';
import txt2 from '../../../../../assets/img/soluciones/agroindustria/SolEmpresas/TxtScanSeguros.webp';
import imgm2 from '../../../../../assets/img/soluciones/agroindustria/SolEmpresas/ScanSegurosM.webp';
import img3 from '../../../../../assets/img/soluciones/agroindustria/SolEmpresas/ScanRegional.webp';
import txt3 from '../../../../../assets/img/soluciones/agroindustria/SolEmpresas/TxtScanRegional.webp';
import imgm3 from '../../../../../assets/img/soluciones/agroindustria/SolEmpresas/ScanRegionalM.webp';


function SolEmpresas() {
    return (
        <>
            <section className="container-fluid pb-5">
                <Container>
                    <h1 className="font-celeste fw-bold text-center mb-5">SOLUCIONES ESPECÍFICAS PARA EMPRESAS</h1>
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
                                        <Link to='/scanagroempresa' className='btn boton-web text-uppercase'>Más info</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} className=''>
                            <p className="fw-semibold color-font  centrarMobile fontSoluciones">
                               Nuestra solución empresa es de un activo vital para el desarrollo de acciones de geomarketing y análisis comercial geoespacial, gestión de flotas de logística y transporte, investigación y desarrollo de nuevos mercados, planificación y auditoría del operativo, y para mejorar así la gestión integral de su negocio.
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
                                        <Link to="/scanseguros" className="btn boton-web text-uppercase">Más info</Link>
                                    </div>
                                </div>
                            </Row>

                        </Col>
                        <Col lg={6} md={8} xs={12} className="d-flex flex-column contenedorSoluciones">
                            <div className="d-flex flex-column h-100">
                                <p className="fw-semibold color-font centrarMobile fontSoluciones">
                                   Evaluar y administrar riesgos agropecuarios es parte de nuestro core-business ScanSeguros en nuestras soluciones exclusiva para empresas aseguradoras, la cual cuenta con módulos de suscripción, evaluación de siniestros, auditoria, tasación de daños y análisis multi-riesgo.
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
                                        <Link to="/scanregional" className="btn boton-web text-uppercase">Más info</Link>
                                    </div>
                                </div>
                            </Row>

                        </Col>
                        <Col lg={6} md={8} xs={12} className="d-flex flex-column contenedorSoluciones">
                            <div className="d-flex flex-column h-100">
                                <p className="fw-semibold color-font centrarMobile fontSoluciones">
                                   ¿Necesita conocer las características propias, el comportamiento pasado, el potencial productivo o el riesgo de determinada región? ScanRegional presenta estudios regionales de la Argentina, Paraguay, Uruguay y Colombia, contando con soluciones específicas de clima, suelo, agua y demás datos claves para su negocio.
                                </p>
                                
                            </div>

                        </Col>
                    </Row>

                </Container>
            </section>

        </>
    )
}

export default SolEmpresas;