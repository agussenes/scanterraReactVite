import React from 'react';
import { Container } from 'react-bootstrap';


// estilo 
import './BannerAgroindustria.css'

// imagenes 
import imgBanner from '../../../../assets/img/home/bannerAgroindustria/imgBannerAgro.webp';

function BannerAgroindustria() {

    return (
        <>
            <Container fluid className='my-5 contenedorGeneral'>
                <Container className="position-relative contenedorBannerImagen" >
                    <img src={imgBanner} alt="Hero" className="w-100 d-block"/>

                    {/* capa oscura + contenido centrado */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex 
                                     align-items-end justify-content-center text-center
                                     bg-opacity-50 " style={{ borderRadius: '32px' }}>
                        <div className='mb-4'>
                            <h1 className="text-white fw-bold m-0 mt-2">Agroindustria</h1>
                            <h4 style={{ maxWidth: '1000px', color: 'white' }} className='textoBanner'>Contamos con una completa suite de soluciones geoespaciales aplicadas
                                y que desarrollamos a partir de las necesidades reales de cada cliente
                                que se dedica a la producción de campo.</h4>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default BannerAgroindustria;