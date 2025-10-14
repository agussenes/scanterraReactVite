import React from 'react'
import { Container } from 'react-bootstrap';

function EspecialistasGestion() {
    return (
        <>
            <section className="py-5 container-fluid" style={{backgroundColor: '#E8E8E8'}}>
                <Container style={{maxWidth: '1000px'}}>
                    <h2 className='fw-bold color-font-2 text-uppercase text-center display-6'>SOMOS ESPECIALISTAS EN LA GESTIÓN</h2>
                    <h2 className='fw-bold color-font-2 text-uppercase text-center display-6 mb-4'>DE INFORMACIÓN GEOESPACIAL</h2>
                    <h4 className="fw-bold text-center mb-3 color-font-negro">A través de diferentes fuentes de información, principalmente satelital, aplicamos geoprocesamientos y desarrollos integrados que derivan en soluciones específicas para diferentes industrias.</h4>
                    <h4 className="fw-bold text-center color-font-negro">Cada solución brinda información precisa para una toma de decisión estratégica que permita aumentar la eficiencia de su negocio.</h4>
                </Container>
            </section>
        </>
    )
}

export default EspecialistasGestion;