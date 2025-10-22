import Seo from '../../seo/Seo';
import { Container, Row, Col } from 'react-bootstrap';

// estilo 
import './CasosDeExito.css';

// componentes UI 
import Portada from '../../components/reutilizables/portada/Portada';


// imagenes
import imgPortada from '../../assets/img/portadas/portadaCasosDeExito.webp';
import imgPortadaMobile from '../../assets/img/portadas/portadaCasosDeExitoMobile.webp';

// imagenes logos 
import imgArraiz from '../../assets/img/home/clientes/productor/img5.webp';
import imgCosufi from '../../assets/img/home/clientes/productor/img15.webp';
import imgAgrotec from '../../assets/img/home/clientes/productor/img16.webp';
import imgUnaga from '../../assets/img/home/clientes/productor/img17.webp';
import imgMercantil from '../../assets/img/home/clientes/seguros/img2.webp';


function CasosDeExito() {

    return (
        <>
            <Seo
                title="Casos de Éxito"
                description="Casos de Éxito - Soluciones Satelitales Aplicadas"
                path="/casos-de-exito"
                image="/og-home.jpg"
                imageAlt="Banner de Home"
                type="website"
                jsonld={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Scanterra Soluciones Satelitales Aplicadas",
                    "url": "https://scanterra.com/casos-de-exito",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://scanterra.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }}
            />
            <Portada
                title="CASOS DE ÉXITO"
                imageDesktop={imgPortada}
                imageMobile={imgPortadaMobile}

            />
            <section className="py-4 container-fluid">
                <Container>
                    <Row className='text-center'>
                        <Col lg={4} md={6} sm={12} className='py-2'>
                            <img src={imgArraiz} alt="imagen de caso de éxito del cliente Arraiz productor" className='img-fluid' />
                            <p>Un gran trabajo en conjunto demuestra que las alianzas a largo plazo tienen resultados concretos en el tiempo.</p>
                            <a
                                href="/docs/casoArraiz.pdf"
                                download="casoArraiz.pdf"
                                className="btn boton-web"
                            >
                                Descargar PDF
                            </a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='py-2'>
                            <h3 className='font-celeste fw-bold'>Agropecuaria <br />La Dulce S.A.</h3>
                            <p>Agropecuaria la Dulce SA, una de las unidades de negocio de Grupo Plaza. Una empresa de altísimo nivel que busca ser eficiente en cada una de sus unidades de negocio.</p>
                            <a
                                href="/docs/casoAgropecuariaLaDulceSA.pdf"
                                download="casoAgropecuariaLaDulceSA.pdf"
                                className="btn boton-web"
                            >
                                Descargar PDF
                            </a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='py-2'>
                            <img src={imgCosufi} alt="imagen de caso de éxito del cliente Cosufi Agropecuaria productor" className='img-fluid' />
                            <p>Una de las empresas más reconocidas y referentes dentro del sector agropecuario. Con una trayectoria de cinco generaciones y con un gran compromiso social de la empresa.</p>
                            <a
                                href="/docs/casoCosufi.pdf"
                                download="casoCosufi.pdf"
                                className="btn boton-web"
                            >
                                Descargar PDF
                            </a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='py-2'>
                            <img src={imgAgrotec} alt="imagen de caso de éxito del cliente Agrotec Paraguay productor" className='img-fluid' />
                            <p>AGROTEC es una empresa de referencia del sector agrícola paraguayo. trayendo lo mejor del mercado mundial de insumos- busca ofrecer lo más moderno y seguro en tecnología agrícola y asistencia técnica en campo.</p>
                            <a
                                href="/docs/casoAgrotec.pdf"
                                download="casoAgrotec.pdf"
                                className="btn boton-web"
                            >
                                Descargar PDF
                            </a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='py-2'>
                            <img src={imgUnaga} alt="imagen de caso de éxito del cliente Unaga - Union Nacional de Asociaciones Ganaderas colombianas productor" className='img-fluid' />
                            <p>Unión Nacional de Asociaciones Ganaderas de Colombia. Agrupa a diversas asociaciones de criadores de distintas Razas como Holstein, Santa Gertrudis, Normando, Cebú, Blanco Orejinegro, entre otros.</p>
                            <a
                                href="/docs/casoUnaga.pdf"
                                download="casoUnaga.pdf"
                                className="btn boton-web"
                            >
                                Descargar PDF
                            </a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='py-2'>
                            <img src={imgMercantil} alt="imagen de caso de éxito del cliente Mercantil Andina Seguros" className='img-fluid' />
                            <p>Una de las compañías Líderes en el marcado asegurador Nacional. El equipo de Mercantil Andina incluye un sector especializado en Riesgos Agrícolas, brindando diferentes seguros como de granizo, resiembra, incendio, heladas y vientos fuertes.</p>
                            <a
                                href="/docs/casoMercantilAndina.pdf"
                                download="casoMercantilAndina.pdf"
                                className="btn boton-web"
                            >
                                Descargar PDF
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default CasosDeExito