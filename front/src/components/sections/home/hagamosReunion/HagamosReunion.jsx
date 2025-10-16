import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// estilo 
import './HagamosReunion.css';

// imagenes
import imgPc from '../../../../assets/img/home/hagamosReunion/imgPc.webp';
import imgMobile from '../../../../assets/img/home/hagamosReunion/imgMobile.webp';

function HagamosReunion() {
  return (
    <>
      <section className="container-fluid contenedorBannerHR p-0 ">
        <img src={imgPc} alt="imagen del banner hagamos una reunion para PC - computadora" className='imgPC' loading='lazy' />
        <img src={imgMobile} alt="imagen del banner hagamos una reunion para mobile - version tablets, telefono" className='imgMobile' loading='lazy' />
        <div className="overlayBanner ">
          <Container className='d-flex flex-column justify-content-center contD'>
            <h2 className="fw-bold text-light text-uppercase mb-3">HAGAMOS UNA REUNIÓN</h2>
            <p className="lead text-light">Realizá un breve encuentro virtual con un asesor de nuestro equipo para que nos cuentes de tu proyecto y lo que necesitas resolver.</p>
            <p className="lead text-light"> </p>
            <div>
              <Link className="btn boton-web" to="https://calendly.com/scanterra/30mindemo">AGENDÁ LA REUNIÓN</Link>
            </div>
          </Container>
        </div>

      </section>

    </>
  )
}

export default HagamosReunion