import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

// estilo 
import './AlianzaEstrategicas.css';

// imagenes 
import img1 from '../../../../assets/img/home/alianzaEstrategicas/img1.webp';
import img2 from '../../../../assets/img/home/alianzaEstrategicas/img2.webp';
import img3 from '../../../../assets/img/home/alianzaEstrategicas/img3.webp';
import img4 from '../../../../assets/img/home/alianzaEstrategicas/img4.webp';

function AlianzaEstrategicas() {
    return (
        <>
            <section className="container-fluid py-4 px-0">
                <Container>
                    <h2 className="text-center color-font fw-bold mb-4">ALIANZAS ESTRATÉGICAS</h2>
                </Container>
                <Container fluid className='bg-gris '>
                    <Container className='py-4'>

                        <Row xs={1} md={2} lg={4} className="g-3 align-items-stretch">
                            {[img1, img2, img3, img4].map((src, i) => (
                                <Col key={i} className="alianza-col d-flex">   
                                    <div className="alianza-card">
                                        <img src={src} alt={`Alianza estratégica ${i + 1}`} loading="lazy" />
                                    </div>
                                </Col>
                            ))}
                        </Row>


                    </Container>
                </Container>
            </section>

        </>
    )
}

export default AlianzaEstrategicas;