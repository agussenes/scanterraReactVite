import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// estilo 
import './TabsSolEs.css';

function TabsSolEs({ tabPrincipal, img1, img2, titulo1, titulo2, bajada1, bajada2 }) {
    const [key, setKey] = useState('principal');
    return (

        <>
            <section className="container-fluid py-4  ">
                <Container className='border-top pt-2'>
                    <Tabs
                        id="solucionesE-tabs"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className=" solucionesE-tabs "
                    >
                        <Tab eventKey={'principal'} title={tabPrincipal}>
                            <Container>
                                <Row className='align-items-center'>
                                    <Col lg={6} md={12} className='d-flex align-items-center flex-column contenedorImgTabs'>
                                        <img src={img1} alt={titulo1} loading='lazy' className='img-fluid' />
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <h1 className="font-celeste text-uppercase fw-bold text-center">{titulo1}</h1>
                                        <p>{bajada1}</p>
                                        <div className="d-flex justify-content-center">
                                            <Link to='/contacto' className='btn boton-web'>Contactanos</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>

                        {img2 && (

                            <Tab eventKey={"mas-info"} title="Más Info">
                                <Container>
                                    <Row className='align-items-center'>
                                        <Col lg={6} md={12} className='contenedorImgTabs'>
                                            <img src={img2} alt={titulo2} loading='lazy' className='img-fluid' />
                                        </Col>
                                        <Col lg={6} md={12} className='d-flex flex-column '>
                                            {titulo2 && (
                                                <h1 className="font-celeste text-uppercase fw-bold text-center">{titulo2}</h1>
                                            )}
                                            <p>{bajada2}</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>

                        )}
                    </Tabs>

                </Container>
            </section >
        </>
    )
}

export default TabsSolEs;