import React from 'react'
import { Container, Row, Col, Ratio } from 'react-bootstrap';

// componentes UI 
import GallerySwiper from '../../../reutilizables/gallerySwiper/GallerySwiper';

// estilo
import './ScanterraSatelital.css';

// imagenes 
import img1 from '../../../../assets/img/tecnologia/imgT3.webp';
import img2 from '../../../../assets/img/tecnologia/imgBaSat.webp';
import img3 from '../../../../assets/img/home/alianzaEstrategicas/img2.webp';
import img4 from '../../../../assets/img/home/alianzaEstrategicas/img4.webp';

// imagenes galerias 
//      imagenes satelitales 
import imgS1 from "../../../../assets/img/tecnologia/carouseles/carouselImgSatelitales/img1.webp";
import imgS2 from "../../../../assets/img/tecnologia/carouseles/carouselImgSatelitales/img2.webp";
import imgS3 from "../../../../assets/img/tecnologia/carouseles/carouselImgSatelitales/img3.webp";
import imgS4 from "../../../../assets/img/tecnologia/carouseles/carouselImgSatelitales/img4.webp";
import imgS5 from "../../../../assets/img/tecnologia/carouseles/carouselImgSatelitales/img5.webp";

//      imagenes satelitales alta resolucion
import imgSC1 from "../../../../assets/img/tecnologia/carouseles/carouselImgSatelitales/imgC1.webp";
import imgSC2 from "../../../../assets/img/tecnologia/carouseles/carouselImgSatelitales/imgC2.webp";
import imgSC3 from "../../../../assets/img/tecnologia/carouseles/carouselImgSatelitales/imgC3.webp";
import imgSC4 from "../../../../assets/img/tecnologia/carouseles/carouselImgSatelitales/imgC4.webp";
import imgSC5 from "../../../../assets/img/tecnologia/carouseles/carouselImgSatelitales/imgC5.webp";

// video planet 
import videoPlanet from '../../../../assets/img/tecnologia/video/videoPlanet.mp4'



function ScanterraSatelital() {

    const imagenesAltaR = [
        { src: imgS1, alt: "", caption: "" },
        { src: imgS2, alt: "", caption: "" },
        { src: imgS3, alt: "", caption: "" },
        { src: imgS4, alt: "", caption: "" },
        { src: imgS5, alt: "", caption: "" },
    ];

    const imagenesAltaR2 = [
        { src: imgSC1, alt: "", caption: "" },
        { src: imgSC2, alt: "", caption: "" },
        { src: imgSC3, alt: "", caption: "" },
        { src: imgSC4, alt: "", caption: "" },
        { src: imgSC5, alt: "", caption: "" },
    ];


    return (
        <>
            <section className="container-fluid pt-5 ">
                <Container>
                    <Row className='d-flex align-items-center'>

                        <Col lg={6} md={12} >
                            <img src={img1} alt="titulo Scanterra API" loading='lazy' className='mb-4 imagenTituloTecnologia' />

                            <p>
                                Al desarrollo de plataformas se le complementa el uso de una amplia red satelital que provee imágenes de alta resolución.
                            </p>
                            <p>
                                Estás imágenes implican que un satélite puede detectar <strong>información muy precisa de diferentes lugares del mundo.</strong> El uso de la tecnología satelital brinda soluciones a muchas industrias y proporciona <strong>datos confiables y exactos.</strong>
                            </p>
                            <p>Técnicamente ofrecemos lo más eficiente en términos de resolución.</p>
                            <p><strong className='boldFuerte color-font'>Resolución espacial:</strong> Imágenes <strong>de hasta 15cm el pixel.</strong></p>
                            <p><strong className='boldFuerte color-font'>Resolución temporal:</strong> Actualización de manera <strong>diaria, semanal o hasta en tiempo real.</strong></p>
                            <p><strong className='boldFuerte color-font'>Resolución espectral:</strong>Diferentes variables de visualización como el <strong>color, profundidad, relieve,</strong> etc. </p>

                        </Col>
                        <Col lg={6} md={12} className=''>
                            <div className="d-flex  flex-column align-items-center h-100">
                                <img src={img2} alt="Implica el desarrollo o adecuación de una plataforma que contiene la información que necesita tu empresa" loading='lazy' className='img-fluid rounded' />
                            </div>
                        </Col>
                    </Row>
                    <Col className='pt-4 pb-2'>
                        <h2 className="fw-bold color-font">Alianza con empresas destacadas a nivel global</h2>
                        <Container className="my-4">
                            <Row>
                                <Col lg={6} md={12}>
                                    <p>Actualmente nuestros partners oficiales en tecnología satelital son Capella Space y Planet. Contamos con más de 120 constelaciones en diferentes regiones del mundo:</p>
                                    <p>EE.UU, Corea, Singapur, Israel, China, Argentina y varios países de Latinoamérica y Europa.</p>
                                </Col>
                                <Col lg={6} md={12}>
                                    <img src={img4} alt="" loading='lazy' className=' rounded' style={{ maxHeight: '120px', paddingBottom: '1rem' }} />
                                    <img src={img3} alt="" loading='lazy' className='rounded' style={{ maxHeight: '120px', paddingBottom: '1rem' }} />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className=' pb-4'>
                        <Container>
                            <h3 className="fw-bold ">Planet</h3>
                            <p>Es una empresa que tiene la misión de obtener imágenes de la Tierra todos los días y hacer que los cambios sean visibles, accesibles y factibles. Ofrece una plataforma web-geográfica con una vasta cantidad de datos satelitales con la frecuencia más alta disponible y análisis que pueden realizarse en tiempo real. Permite hacer proyecciones amplias que deriven en una toma de decisión inteligente y estratégica.</p>
                            <Row>
                                <Col lg={6} md={12}>

                                    <video
                                        src={videoPlanet}
                                        autoPlay={false}
                                        muted
                                        loop
                                        playsInline
                                        controls={true}
                                        style={{ width: "100%", height: "auto", display: "block" }}
                                        className='rounded'
                                    />
                                </Col>
                                <Col lg={6} md={12} >

                                    <iframe
                                        src="https://www.youtube.com/embed/XDftStOPevM"
                                        title="Planet Overview"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        style={{ width: '100%', height: '100%' }}
                                        className='rounded'
                                    />

                                </Col>
                            </Row>
                        </Container>
                    </Col>

                    <Col className='py-3'>
                        <h3 className="fw-bold italic">Imágenes satelitales de alta resolución</h3>

                        <Container className="my-4">
                            <GallerySwiper items={imagenesAltaR} perRow={4} />
                        </Container>
                    </Col>

                    <Col className=' py-4'>
                        <Container>
                            <h3 className="fw-bold ">Capella Space</h3>
                            <Row>
                                <Col lg={6} md={12}>

                                    <p>Es una nueva empresa del Silicon Valley que cuenta con una constelación de satélites de radar submétricos (SAR) , que permite tomar imágenes satelitales de alta calidad, de cualquier lugar de la tierra, sin importar las condiciones climáticas, o si es de día o de noche. La plataforma de Capella Space permite programar y entregar las imágenes en el menor tiempo posible a través de una plataforma web 100% automatizada, autónoma y confidencial.</p>

                                </Col>
                                <Col lg={6} md={12} >
                                    <Ratio aspectRatio="16x9">
                                        <iframe
                                            src="https://www.youtube.com/embed/day11hxuyKU?si=kmRDaCls21NO53Bo"
                                            title="Capella Overview and Introducing Evolved Satellite Design"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen

                                            className='rounded'
                                        />
                                    </Ratio>
                                </Col>
                            </Row>
                            <Col className='pt-4'>
                                <h3 className="fw-bold italic">Imágenes satelitales de alta resolución</h3>

                                <Container className="my-4">
                                    <GallerySwiper items={imagenesAltaR2} perRow={4} />
                                </Container>
                            </Col>
                        </Container>
                    </Col>
                </Container>

            </section>

        </>
    )
}

export default ScanterraSatelital