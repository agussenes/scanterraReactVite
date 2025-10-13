import React from 'react'
import './NotFound.css'

import { Link } from 'react-router-dom'

import { Container} from 'react-bootstrap'

function NotFound() {
  return (
    <>
    <section className='contenedorNotFound container-fluid m-0 p-0 py-4 d-flex align-items-center flex-column'>
        <Container className='d-flex justify-content-center py-4'>
            <img src="/img/notFound.webp" alt="imagen de pagina no encontrado" className='' height={400}/>
        </Container>
        <Container className='d-flex justify-content-center  py-4'>
            <h1 className=' colorTextNT tituloNT'>Página no encontrada</h1>
        </Container>
        <Container className='d-flex justify-content-center  py-4 contenedorBotonNT'>
            <Link to="/" className='botonNotFound btn btn-lg rounded-pill' ><i className="bi bi-arrow-left"></i> Volver</Link>
        </Container>
    </section>
    </>
  )
}

export default NotFound