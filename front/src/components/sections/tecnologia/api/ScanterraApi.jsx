import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

// componentes UI 
import GallerySwiper from '../../../reutilizables/gallerySwiper/GallerySwiper';

// estilo
import './ScanterraApi.css';

// imagenes 
import img1 from '../../../../assets/img/tecnologia/imgT2.webp';
import img2 from '../../../../assets/img/tecnologia/imgBaApi.webp';
import img3 from '../../../../assets/img/tecnologia/imgTGGeop1.webp';
import img4 from '../../../../assets/img/tecnologia/imgTGGeop2.webp';

// imagenes galerias 
//      Geoprocesos 
import imgG1 from "../../../../assets/img/tecnologia/carouseles/carouselAPI/img1.webp";
import imgG2 from "../../../../assets/img/tecnologia/carouseles/carouselAPI/img2.webp";
import imgG3 from "../../../../assets/img/tecnologia/carouseles/carouselAPI/img3.webp";
import imgG4 from "../../../../assets/img/tecnologia/carouseles/carouselAPI/img4.webp";
import imgG5 from "../../../../assets/img/tecnologia/carouseles/carouselAPI/img5.webp";



function ScanterraApi() {

    const imagenesGeo = [
        { src: imgG1, alt: "", caption: "" },
        { src: imgG2, alt: "", caption: "" },
        { src: imgG3, alt: "", caption: "" },
        { src: imgG4, alt: "", caption: "" },
        { src: imgG5, alt: "", caption: "" },
    ];




    return (
        <>
            <section className="container-fluid pt-5 ">
                <Container>
                    <Row className='d-flex'>

                        <Col lg={8} md={12} >
                            <img src={img1} alt="titulo Scanterra API" loading='lazy' className='mb-4 imagenTituloTecnologia' />

                            <p><strong className='boldFuerte color-font'>Acceso simple y seguro: </strong>Accedés de manera simple y segura a datos geoespaciales de alta precisión, listos para ser usados en tus plataformas y aplicaciones.</p>
                            <p><strong className='boldFuerte color-font'>Geoprocesamiento y desarrollo: </strong>Nuestra API está diseñada para desarrolladores y empresas que necesitan automatizar procesos, conectar flujos de trabajo y potenciar decisiones estratégicas con información en tiempo real. Vas a poder:</p>
                            <ul>
                                <li>Analizar y extraer datos de forma manual conlleva mucho esfuerzo y tiempo.</li>
                                <li>Además, en general no se le aplica un criterio científico que oriente hacia un objetivo puntual.</li>
                                <li>El geoproceso automático que desarrollamos ahorra gran cantidad de tiempo y entrega datos ordenados.</li>
                                <li>A los decisores les entregamos informes detallados que les permiten hacer una gestión más eficiente de diferentes recursos.</li>
                            </ul>
                            <p><strong className='boldFuerte color-font'>Flexible y escalable:</strong>Se adapta a tus necesidades, desde proyectos puntuales hasta operaciones a gran escala.</p>
                            <p><strong className='boldFuerte color-font'>Precisión y rapidez:</strong> Imágenes y datos georreferenciados de alta resolución, disponibles en horas.</p>
                            <p><strong className='boldFuerte color-font'>Confidencialidad asegurada:</strong> La información llega de forma segura y exclusiva para tu organización.</p>

                        </Col>
                        <Col lg={4} md={12}>
                            <div className="d-flex justify-content-center flex-column align-items-center">
                                <img src={img2} alt="Implica el desarrollo o adecuación de una plataforma que contiene la información que necesita tu empresa" loading='lazy' className='img-fluid rounded' />
                            </div>
                        </Col>
                    </Row>
                    <Col >
                        <h3 className="fw-bold italic">Descripción de Geoprocesos</h3>
                        <Container className="my-4">
                            <Row>
                                <Col lg={6} md={12}>
                                    <img src={img3} alt="" loading='lazy' className='img-fluid rounded' />

                                </Col>
                                <Col lg={6} md={12}>
                                    <img src={img4} alt="" loading='lazy' className='img-fluid rounded' />

                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col >
                        <Container className="my-4">
                            <GallerySwiper items={imagenesGeo} perRow={4} />
                        </Container>
                    </Col>
                </Container>

            </section>

        </>
    )
}

export default ScanterraApi