import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

// componentes UI 
import GallerySwiper from '../../../reutilizables/gallerySwiper/GallerySwiper';

// estilo
import './GeoPlataforma.css';

// imagenes 
import img1 from '../../../../assets/img/tecnologia/imgT.webp';
import img2 from '../../../../assets/img/tecnologia/imgBa1.webp';
import img3 from '../../../../assets/img/tecnologia/imgBa2.webp';

// imagenes galerias 
//      GeoPlataform 
import imgG1 from "../../../../assets/img/tecnologia/carouseles/carouselGeoP/img1.webp";
import imgG2 from "../../../../assets/img/tecnologia/carouseles/carouselGeoP/img2.webp";
import imgG3 from "../../../../assets/img/tecnologia/carouseles/carouselGeoP/img3.webp";
import imgG4 from "../../../../assets/img/tecnologia/carouseles/carouselGeoP/img4.webp";
import imgG5 from "../../../../assets/img/tecnologia/carouseles/carouselGeoP/img5.webp";

//      Collect 
import imgC1 from "../../../../assets/img/tecnologia/carouseles/carouselCollect/img1.webp";
import imgC2 from "../../../../assets/img/tecnologia/carouseles/carouselCollect/img2.webp";
import imgC3 from "../../../../assets/img/tecnologia/carouseles/carouselCollect/img3.webp";
import imgC4 from "../../../../assets/img/tecnologia/carouseles/carouselCollect/img4.webp";
import imgC5 from "../../../../assets/img/tecnologia/carouseles/carouselCollect/img5.webp";

function GeoPlataforma() {

    const imagenesGeo = [
        { src: imgG1, alt: "", caption: "" },
        { src: imgG2, alt: "", caption: "" },
        { src: imgG3, alt: "", caption: "" },
        { src: imgG4, alt: "", caption: "" },
        { src: imgG5, alt: "", caption: "" },
    ];

      const imagenesCol = [
        { src: imgC1, alt: "", caption: "" },
        { src: imgC2, alt: "", caption: "" },
        { src: imgC3, alt: "", caption: "" },
        { src: imgC4, alt: "", caption: "" },
        { src: imgC5, alt: "", caption: "" },
    ];


    return (
        <>
            <section className="container-fluid pt-5 ">
                <Container>
                    <Row className='d-flex'>

                        <Col lg={8} md={12} >
                            <img src={img1} alt="titulo Scanterra GeoPlataforma" loading='lazy' className='mb-4 imagenTituloTecnologia' />

                            <p>Implica el desarrollo o adecuación de una plataforma que contiene la información que necesita tu empresa, pero la mantiene organizada para facilitar cualquier gestión y orientada a objetivos.</p>
                            <p><strong className='boldFuerte color-font'>Plataforma SaaS Multi-Tenant:</strong><br />Se adapta a tus necesidades, desde proyectos puntuales hasta operaciones a gran escala.</p>
                            <p><strong className='boldFuerte color-font'>Precisión y rapidez:</strong>Para cada proyecto o cliente configuramos la plataforma de acuerdo a sus necesidades específicas, garantizando personalización y eficiencia operativa</p>
                            <p><strong className='boldFuerte color-font'>Plataforma de Última Milla: </strong>Es una solución flexible, escalable y adaptable, diseñada específicamente para facilitar la entrega de información clave y funcionalidades directamente a los usuarios finales. Esto permite transformar datos complejos en herramientas prácticas, listas para ser utilizadas por equipos operativos, técnicos o decisores sobre el terreno.</p>
                            <p><strong className='boldFuerte color-font'>Desarrollo modular: </strong> La plataforma es totalmente modular. Esto significa que se incorporan únicamente los módulos de gestión que cada empresa requiere, asegurando que cada implementación esté alineada con sus objetivos.</p>
                            <p><strong className='boldFuerte color-font'>Sistema integrador:</strong> Integra un conjunto de interfaces, capas de datos y variables clave que permiten optimizar procesos, organizar información y facilitar la toma de decisiones estratégicas.</p>
                            <p><strong className='boldFuerte color-font'>FrontEnd y BackEnd: </strong>Te entregamos una plataforma que cuenta con un panel de administración (Back End) sencillo y adaptable a tu equipo técnico. Y por último, una interfaz de visualización (Front End) de navegación ágil, intuitiva y optimizada.</p>
                            <p><strong className='boldFuerte color-font'>App Móvil: </strong>Te ofrecemos una adecuación de la plataforma para dispositivos móviles que se denomina Collect. Te permite la gestión desde el celular y es de uso completamente adaptable. Se descarga de forma gratuita en Play Store.</p>

                        </Col>
                        <Col lg={4} md={12}>
                            <div className="d-flex justify-content-center flex-column bloqueImagenesTec">
                                <img src={img2} alt="Implica el desarrollo o adecuación de una plataforma que contiene la información que necesita tu empresa" loading='lazy' className='img-fluid rounded' />
                                <img src={img3} alt="Plataforma SaaS Multi-Tenant" loading='lazy' className='img-fluid rounded' />
                            </div>
                        </Col>
                    </Row>
                    <Col >
                        <h3 className="fw-bold italic">Visualización de GeoPlataforma</h3>
                        <Container className="my-4">
                            <GallerySwiper items={imagenesGeo} perRow={4} />
                        </Container>
                    </Col>
                    <Col >
                        <h3 className="fw-bold italic">Collect (Aplicación móvil)</h3>
                        <Container className="my-4">
                            <GallerySwiper items={imagenesCol} perRow={5} />
                        </Container>
                    </Col>
                </Container>

            </section>

        </>
    )
}

export default GeoPlataforma