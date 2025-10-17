import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BannerAgroindustria() {
    return (
        <>
            <section className="py-5 bg-custom">
                <Container>
                    <h2 className="fw-semibold text-light text-center">¿DESEA CONOCER MÁS SOBRE NUESTRAS <br className='ocultarEnMobile' />
                        SOLUCIONES PARA EL PRODUCTOR AGROPECUARIO?</h2>
                    <div className="d-flex justify-content-center mt-4">
                        <Link to='/agroindustria' className='btn boton-web text-uppercase'>más info</Link>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default BannerAgroindustria;