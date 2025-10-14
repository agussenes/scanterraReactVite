import React from 'react'
import { Container } from 'react-bootstrap'

function PoliticaPrivacidad() {
    return (
        <>
            <section className='container-fluid'>
                <Container className='py-4 my-2'>
                    <h1 className='color-font fw-bold text-uppercase mb-4'>Política de privacidad</h1>

                    <p className="lead"><strong className=' fw-bold' style={{fontSize: '1.5rem'}}>1. Introducción</strong><br />Esta Política de Privacidad (en adelante, “Política”) regula la recopilación, uso, y divulgación de información personal en el sitio web de Scanterra, accesible en www.scanterra.com (en adelante, el “Sitio”). Al usar nuestro Sitio y servicios (en adelante, “Servicios”), usted acepta esta Política y los Términos y Condiciones asociados.</p>
                    <p className="lead"><strong className=' fw-bold' style={{fontSize: '1.5rem'}}>2. Responsable del tratamiento de datos</strong> <br />Scanterra, con domicilio en Fitz Roy 1875 – 7° A CP C1414CIA. – Capital Federal. Argentina, es el responsable del tratamiento de los datos personales recopilados a través del Sitio.</p>
                    <p className="lead"><strong className=' fw-bold' style={{fontSize: '1.5rem'}}>3. Información recopilada</strong></p>
                    <ol>
                        <li className="lead"><strong className=' fw-bold' style={{fontSize: '1.3rem'}}>Información proporcionada por el usuario:</strong>Datos como nombre, correo electrónico, número de teléfono, dirección, y otra información que usted decida proporcionar.</li>
                        <li className="lead"><strong className=' fw-bold' style={{fontSize: '1.3rem'}}>Información técnica:</strong>Dirección IP, tipo de navegador, sistema operativo, y datos de navegación recopilados mediante cookies y tecnologías similares.</li>
                        <li className="lead"><strong className=' fw-bold' style={{fontSize: '1.3rem'}}>Datos sensibles:</strong>Scanterra no solicita ni procesa información sensible, excepto cuando sea estrictamente necesario y con su consentimiento explícito.</li>
                    </ol>

                    <p className="lead"><strong className=' fw-bold' style={{fontSize: '1.5rem'}}>4. Finalidad del tratamiento</strong><br />Los datos recopilados se procesan para:</p>
                    <ul>
                        <li className="lead">Prestar y mejorar nuestros servicios.</li>
                        <li className="lead">Gestionar consultas y solicitudes.</li>
                        <li className="lead">Enviar comunicaciones relacionadas con nuestros servicios.</li>
                        <li className="lead">Cumplir con obligaciones legales.</li>
                    </ul>

                    <p className="lead"><strong className=' fw-bold' style={{fontSize: '1.5rem'}}>5. Seguridad de la Información</strong><br />Scanterra implementa medidas técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida o el daño. </p>

                    <p className="lead"><strong className=' fw-bold' style={{fontSize: '1.5rem'}}>6. Derechos del usuario</strong><br />Usted tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales, conforme a la normativa aplicable. Para ejercer estos derechos, contáctenos en <a href="mailto:info@scanterra.com">info@scanterra.com</a>.</p>

                    <p className="lead"><strong className=' fw-bold' style={{fontSize: '1.5rem'}}>7. Divulgación a terceros</strong><br />Scanterra puede compartir datos con proveedores y socios que ayudan a ofrecer nuestros Servicios. Dichos terceros están obligados a garantizar la confidencialidad y seguridad de los datos.</p>

                    <p className="lead"><strong className=' fw-bold' style={{fontSize: '1.5rem'}}>8. Retención de datos</strong><br />Conservamos sus datos personales mientras sea necesario para cumplir las finalidades descritas, salvo que la ley exija lo contrario.</p>

                    <p className="lead"><strong className=' fw-bold' style={{fontSize: '1.5rem'}}>9. Modificaciones a la política</strong><br />Scanterra se reserva el derecho de actualizar esta Política. Cualquier cambio se notificará a través del Sitio o mediante otros medios adecuados.</p>

                    <p className="lead"><strong className=' fw-bold' style={{fontSize: '1.5rem'}}>10. Contacto</strong><br />Si tiene preguntas sobre esta Política, puede comunicarse con nosotros en <a href="mailto:info@scanterra.com">info@scanterra.com</a> o por correo postal a Fitz Roy 1875 – 7° A
                        CP C1414CIA. – Capital Federal. Argentina.</p>

                </Container>

            </section>
        </>
    )
}

export default PoliticaPrivacidad