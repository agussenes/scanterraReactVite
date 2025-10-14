import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

// css 
import './MapaCounter.css'

// imagenes 
import imgMapa from '../../../../assets/img/home/mapa/mapaHome.webp'

function useInViewOnce(options = { threshold: 0.2 }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                setInView(true);
                obs.disconnect();
            }
        }, options);
        obs.observe(el);
        return () => obs.disconnect();
    }, [options]);
    return [ref, inView];
}

// Cuenta de 0 a target en "duration" ms cuando start=true
function useCountUp(target = 0, duration = 1200, start = false) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!start) return;
        let raf;
        const t0 = performance.now();
        const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1);
            setValue(Math.floor(p * target));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, duration, start]);
    return value;
}

function MapaCounter() {
    const [countersRef, countersInView] = useInViewOnce({ threshold: 0.2 });

    const valAnios = useCountUp(20, 1200, countersInView);
    const valHectareas = useCountUp(700, 1400, countersInView);
    const valPaises = useCountUp(10, 1200, countersInView);
    const valProy = useCountUp(1080, 1600, countersInView);

    return (
        <>
            <Container className='py-5'>
                <div className='contenedorTituloMapa'>
                    <h2 className="text-center fw-bold text-uppercase color-font">BRINDAMOS SOLUCIONES EN 10 PAÍSES DE LATINOAMÉRICA</h2>
                    <h3 className="text-center fw-semibold color-font">Argentina, Brasil, Uruguay, Paraguay, Bolivia, Perú, Ecuador, Colombia, México y Venezuela</h3>
                    <div className="d-flex justify-content-center">
                        <p className='lineMapCounter'></p>

                    </div>
                </div>
                <Row className='d-flex justify-content-center align-items-center '>
                    <Col md={12} lg={6}>
                        <img
                            src={imgMapa}
                            alt="Argentina, Brasil, Uruguay, Paraguay, Bolivia, Perú, Ecuador, Colombia, México y Venezuela"
                            className="img-fluid mc-map"
                            loading="lazy"
                        />
                    </Col>
                    <Col md={12} lg={6} className='textoMapa'>
                        <p className="lead ">Nuestra <strong className='fw-bold'>empresa inició</strong> su camino en <strong className='fw-bold'>2004.</strong> Desde hace varios años somos una de las compañías <strong className='fw-bold'>líderes</strong> en Latinoamérica en el desarrollo de <strong className='fw-bold'>soluciones geoespaciales</strong> aplicadas a diferentes industrias.</p>
                        <p className="lead fw-bold">Nuestro servicio garantiza:</p>
                        <ul>
                            <li className="lead">Información objetiva</li>
                            <li className="lead">Gestión de riesgo</li>
                            <li className="lead">Eficiencia</li>
                            <li className="lead">Rentabilidad</li>
                        </ul>

                    </Col>
                </Row>
                <Row ref={countersRef} className="text-center mt-3 g-4">
                    <Col xs={12} md={3}>
                        <div className="mc-counter">
                            <div className="mc-number">{valAnios}</div>
                            <div className="mc-underline mx-auto" />
                            <div className="mc-label">AÑOS DE EXPERIENCIA</div>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className="mc-counter">
                            <div className="mc-number">{valHectareas}</div>
                            <div className="mc-underline mx-auto" />
                            <div className="mc-label">MILLONES DE HA. PROCESADAS</div>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className="mc-counter">
                            <div className="mc-number">{valPaises}</div>
                            <div className="mc-underline mx-auto" />

                            <div className="mc-label">PAÍSES EN LATAM</div>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className="mc-counter">
                            <div className="mc-number">{valProy.toLocaleString("es-AR")}</div>
                            <div className="mc-underline mx-auto" />
                            <div className="mc-label">PROYECTOS REALIZADOS</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MapaCounter;