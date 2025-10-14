import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import './Footer.css'

function Footer() {
  return (
    <>
      <section className="d-flex-container-fluid bg-custom-2 py-4 contenedorGenFooter">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col sm={12} md={6} lg={3} className="p-2">
              <h6 className=" text-uppercase tituloFooter">CERTIFICADO DE GESTIÓN DE CALIDAD</h6>
              <img src="/img/imgFooter.webp" alt="imagen de certificado de gestión de calidad" loading="lazy" className="imgFooter img-fluid"  />
            </Col>
            <Col sm={12} md={6} lg={3} className="p-2">
              <h6 className=" text-uppercase tituloFooter">SOLUCIONES</h6>

              <ul className="list-unstyled ">
                <li ><Link to="/agroindustria" className="text-decoration-none linksFooter">Agroindustria</Link></li>
                <li><Link to="/mineria" className="text-decoration-none linksFooter">Minería</Link></li>
                <li><Link to="/energia" className="text-decoration-none linksFooter">Energía</Link></li>
                <li><Link to="/defensa-y-seguridad" className="text-decoration-none linksFooter">Defensa y Seguridad</Link></li>
                <li><Link to="/dominio-maritimo" className="text-decoration-none linksFooter">Dominio Marítimo</Link></li>
                <li><Link to="/gobierno" className="text-decoration-none linksFooter">Gobierno</Link></li>
              </ul>

            </Col>
            <Col sm={12} md={6} lg={3} className="p-2">
              <h6 className=" text-uppercase tituloFooter">RED DE ASESORES</h6>
              <ul className="list-unstyled " >
                <li ><Link to="/red-de-asesores" className="text-decoration-none linksFooter">Ponete en contacto.</Link></li>
                <li><Link to="/red-de-asesores" className="text-decoration-none linksFooter">Estamos en diferentes puntos del mundo.</Link></li>
              </ul>
            </Col>
            <Col sm={12} md={6} lg={3} className="p-2">
              <h6 className=" text-uppercase  tituloFooter">OFICINA ARGENTINA</h6>
              <ul className="list-unstyled " >
                <li className="color-font fw-semibold"><small>Fitz Roy 1875 – 7° A CP C1414CIA. – Capital Federal. Argentina.</small></li>
                <li ><a href="mailto:info@scanterra.com" className="text-decoration-none linksFooter">info@scanterra.com</a></li>
                <li><Link to="tel:+5491156474793" className="text-decoration-none linksFooter">+549 11 5647 4793</Link></li>
              </ul>
              <h6 className=" text-uppercase tituloFooter">OFICINA URUGUAY</h6>
              <ul className="list-unstyled color-font" >
                <li className="fw-semibold" >Maldonado.</li>
              </ul>
              <h6 className=" text-uppercase tituloFooter">OFICINA ESTADOS UNIDOS</h6>
              <ul className="list-unstyled color-font" >
                <li className="fw-semibold">Nuevo México.</li>
              </ul>
            </Col>
          </Row>

        </Container>
      </section>
      <section className="d-flex-container-fluid bg-custom py-2">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col lg={12}>
              <ul className="list-unstyled d-flex gap-4 justify-content-center ">
                <li ><Link to="/politica-de-privacidad" className="text-decoration-none linksFooterW"><small>Política de privacidad</small></Link></li>
                <li className="text-decoration-none linksFooterW">|</li>
                <li><Link to="/terminos-de-uso" className="text-decoration-none linksFooterW"><small>Términos de uso</small></Link></li>

              </ul>
              <hr className="border  border-white opacity-50 " />

            </Col>

            <Col lg={12} className="d-flex justify-content-center ">

              <p className="text-light"><small>Desarrollado por <a href="https://usinacreativa.com.ar/"> <img src="/img/logoUsina.webp" alt="logo de Usina Creativa, agencia de comunicacion acordo del desarrollo de esta web" height={25} className="mb-1" /></a> &copy; 2025 ScanTerra SRL - Todos los derechos reservados</small> </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer