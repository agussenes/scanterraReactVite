import { Link, NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import LanguageSwitcher from "../utils/LanguageSwitcher";
import { useSearch } from "../search/SearchProvider";
import "./Header.css";

export default function Header() {
  const { setOpen } = useSearch();

  // --- controlar el collapse ---
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  // cerrar al cambiar de ruta (por navegación SPA)
  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  const closeMenu = () => setExpanded(false);

  return (
    <header className="header ">
      <nav className="container-fluid p-0">

        {/* BLOQUE 1 — TOP BAR */}
        <div className="container-fluid bloque-1 bg-custom-3">
          <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-between py-2 gap-3">
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2 gap-sm-4 text-muted small">
              <p className="m-0"><a href="tel:+5491156474793" className="color-font text-decoration-none">+54 9 11 5647 4793</a></p>
              <p className="m-0"><a href="mailto:info@scanterra.com" className="color-font text-decoration-none">info@scanterra.com</a></p>
            </div>
            <div className="d-flex align-items-center gap-2 gap-md-3">
              <Link to="/capacitaciones" className="btn btn-primary btn-sm botonCapac text-uppercase rounded-pill bg-celeste fw-semibold py-0">Capacitaciones</Link>
              <Link to="/clientes" className="btn btn-success btn-sm text-uppercase rounded-pill fw-semibold py-0">Acceso Clientes</Link>
            </div>
          </div>
        </div>

        {/* BLOQUE 2 — LOGO + REDES */}
        <div className="container-fluid bloque-2 bg-custom-2">
          <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-between gap-3 text-center text-sm-start">
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/" onClick={closeMenu}>
                <img src="/img/logo.webp" alt="Scanterra - Soluciones Satelitales Aplicadas" loading="lazy" className="logo-scanterra" />
              </Link>
            </div>

            <div className="d-flex align-items-center gap-2 redes m-2">
              <a href="https://www.instagram.com/scanterra_oficial/" className="sci text-light" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a href="https://www.facebook.com/ScanTerra" className="sci text-light" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="https://x.com/scanterra" className="sci text-light" aria-label="X"><i className="bi bi-twitter-x" /></a>
              <a href="https://www.linkedin.com/company/scanterra/posts/?feedView=all" className="sci text-light" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>

        {/* BLOQUE 3 — NAVBAR DARK */}
        <div className="container-fluid bloque-3 p-0">
          <Navbar
            expand="lg"
            variant="dark"
            data-bs-theme="dark"
            className="bg-custom border-top mb-0"
            expanded={expanded}                 // <-- controlado
            onToggle={setExpanded}              // <-- toggle hamburguesa
          >
            <Container>
              <Navbar.Toggle aria-controls="main-nav" />
              <Navbar.Collapse id="main-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Soluciones" id="dd-soluciones">
                    <NavDropdown.Item as={NavLink} to="/servicios/agroindustria" onClick={closeMenu}>Agroindustria</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/servicios/mineria" onClick={closeMenu}>Minería</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/servicios/energia" onClick={closeMenu}>Energía</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/servicios/defensa" onClick={closeMenu}>Defensa y Seguridad</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/servicios/maritimo" onClick={closeMenu}>Dominio Marítimo</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/servicios/gobierno" onClick={closeMenu}>Gobierno</NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link as={NavLink} to="/tecnologia" onClick={closeMenu}>Tecnología</Nav.Link>

                  <NavDropdown title="Novedades" id="dd-novedades">
                    <NavDropdown.Item as={NavLink} to="/novedades/publicaciones" onClick={closeMenu}>Publicaciones</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/novedades/actividades" onClick={closeMenu}>Actividades</NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link as={NavLink} to="/proyectos" onClick={closeMenu}>Casos de éxito</Nav.Link>
                  <Nav.Link as={NavLink} to="/nosotros" onClick={closeMenu}>Nosotros</Nav.Link>
                  <Nav.Link as={NavLink} to="/contacto" onClick={closeMenu}>Contacto</Nav.Link>
                </Nav>
              </Navbar.Collapse>

              {/* Acciones derecha */}
              <div className="d-flex align-items-center gap-3 ms-lg-3">
                <div className="contenedorBusqueda">
                  <button type="button" className="btn-search" onClick={() => setOpen(true)}>
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
