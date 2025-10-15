import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

// estilo 
import './VinculoConInstituciones.css';

// imagenes 
import img1 from '../../../../assets/img/home/vinculoInstituciones/img1.webp';
import img2 from '../../../../assets/img/home/vinculoInstituciones/img2.webp';
import img3 from '../../../../assets/img/home/vinculoInstituciones/img3.webp';
import img4 from '../../../../assets/img/home/vinculoInstituciones/img4.webp';
import img5 from '../../../../assets/img/home/vinculoInstituciones/img5.webp';

function VinculoConInstituciones() {
    return (
        <>
            <section className="container-fluid py-4 px-0">
                <Container>
                    <h2 className="text-center color-font fw-bold mb-4">VÍNCULO CON INSTITUCIONES</h2>
                </Container>
                <Container fluid className='bg-gris '>
                    <Container className='py-4'>

                        <Row xs={2} md={3} lg={5} className="g-3 align-items-stretch">
                            {[img1, img2, img3, img4, img5].map((src, i) => (
                                <Col key={i} className="alianza-col">
                                    <div className="alianza-card  d-flex justify-content-end">
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

export default VinculoConInstituciones;