import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// estilos 
import './BloqueBtnHover.css'

function BloqueBtnHover({ cantidadColumnas, img1, img2, img3, url1, url2, url3 }) {

    return (
        <>

            <section className="container-fluid m-0 p-0 sectionContenedorBtnHover">
                {cantidadColumnas === 2 ? (
                    <>
                        <Row className="m-0 p-0">
                            <Col
                                lg={6}
                                md={6}
                                sm={6}
                                xs={12}
                                className="contenedorBloqueBtnHover"
                                style={{ backgroundImage: `url(${img1})` }}
                            >
                                <Link to={url1} className="overlay-link">
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </Col>

                            <Col
                                lg={6}
                                md={6}
                                sm={6}
                                xs={12}
                                className="contenedorBloqueBtnHover"
                                style={{ backgroundImage: `url(${img2})` }}
                            >
                                <Link to={url2} className="overlay-link">
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </Col>
                        </Row>

                    </>
                ) : (
                    <>
                        <Row className='d-flex justify-content-center m-0 p-0'>
                            <Col lg={4} md={6} sm={6} xs={12} style={{ backgroundImage: `url(${img1})` }} className='contenedorBloqueBtnHover'>
                                <Link to={url1} className="overlay-link">
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12} style={{ backgroundImage: `url(${img2})` }} className='contenedorBloqueBtnHover'>
                                <Link to={url3} className="overlay-link">
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12} style={{ backgroundImage: `url(${img3})` }} className='contenedorBloqueBtnHover'>
                                <Link to={url2} className="overlay-link">
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </Col>

                        </Row>
                    </>
                )}
            </section>

        </>
    )
}

export default BloqueBtnHover