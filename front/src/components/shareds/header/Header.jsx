import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import LanguageSwitcher from "../utils/LanguageSwitcher";
import "./Header.css";

export default function Header() {
  return (
    <header className="header border-bottom">
      <nav className="container-fluid p-0">

        {/* BLOQUE 1 — TOP BAR */}
        <div className="container-fluid bloque-1 bg-custom-3">
          <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-between py-2 gap-3 ">
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2 gap-sm-4 text-muted small">
              <p className="m-0"><a href="tel:+5491156474793" className="color-font text-decoration-none">+54 9 11 5647 4793</a></p>
              <p className="m-0"><a href="mailto:info@scanterra.com" className="color-font text-decoration-none">info@scanterra.com</a></p>
            </div>
            <div className="d-flex align-items-center gap-2 gap-md-3">
              <Link to="/capacitaciones" className="btn btn-primary btn-sm text-uppercase rounded-pill fw-semibold py-0">Capacitaciones</Link>
              <Link to="/clientes" className="btn btn-success btn-sm text-uppercase rounded-pill fw-semibold py-0">Acceso Clientes</Link>
            </div>
          </div>
        </div>

        {/* BLOQUE 2 — LOGO + REDES */}
        <div className="container-fluid bloque-2 bg-custom-2">
          <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-between  gap-3 text-center text-sm-start">
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/">
                <img src="/img/logo.webp" alt="Scanterra - Soluciones Satelitales Aplicadas" loading="lazy" className="logo-scanterra" />
              </Link>
            </div>

            <div className="d-flex align-items-center gap-2 redes m-2">
              <a href="https://www.instagram.com/scanterra_oficial/" className="sci text-light" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="https://www.facebook.com/ScanTerra" className="sci text-light" aria-label="Facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="https://x.com/scanterra" className="sci text-light" aria-label="X">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="https://www.linkedin.com/company/scanterra/posts/?feedView=all" className="sci text-light" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>

        {/* BLOQUE 3 — NAVBAR DARK */}
        <div className="container-fluid bloque-3 p-0">
          <Navbar expand="lg" className="bg-custom border-top border-bottom" variant="dark" data-bs-theme="dark">
            <Container className="">
              {/* Hamburguesa */}
              <Navbar.Toggle aria-controls="main-nav" />

              <Navbar.Collapse id="main-nav">
                {/* Links izquierda */}
                <Nav className="me-auto">
                  <NavDropdown title="Soluciones" id="dd-soluciones" >
                    <NavDropdown.Item as={NavLink} to="/servicios/agroindustria">
                      Agroindustria
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/servicios/mineria">
                      Minería
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/servicios/energia">
                      Energía
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/servicios/defensa">
                      Defensa y Seguridad
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/servicios/maritimo">
                      Dominio Marítimo
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/servicios/gobierno">
                      Gobierno
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link as={NavLink} to="/tecnologia">
                    Tecnología
                  </Nav.Link>

                  <NavDropdown title="Novedades" id="dd-novedades">
                    <NavDropdown.Item as={NavLink} to="/novedades/publicaciones">
                      Publicaciones
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/novedades/actividades">
                      Actividades
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link as={NavLink} to="/proyectos">
                    Casos de éxito
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/nosotros">
                    Nosotros
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/contacto">
                    Contacto
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              {/* Acciones derecha */}
              <div className="d-flex align-items-center gap-3 ms-lg-3">
                <div className="contenedorBusqueda">
                  <button type="button" className="btn-search" onClick={() => { }}>
                    <i className="bi bi-search" />
                  </button>
                </div>
                <LanguageSwitcher />
              </div>
            </Container>
          </Navbar>
        </div>

      </nav>
    </header>
  );
}
