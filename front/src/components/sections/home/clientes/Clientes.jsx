import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// estilos 
import './Clientes.css';

// imagenes

// img productores 
import img1 from '../../../../assets/img/home/clientes/productor/img1.webp'
import img2 from '../../../../assets/img/home/clientes/productor/img2.webp'
import img3 from '../../../../assets/img/home/clientes/productor/img3.webp'
import img4 from '../../../../assets/img/home/clientes/productor/img4.webp'
import img5 from '../../../../assets/img/home/clientes/productor/img5.webp'
import img6 from '../../../../assets/img/home/clientes/productor/img6.webp'
import img7 from '../../../../assets/img/home/clientes/productor/img7.webp'
import img8 from '../../../../assets/img/home/clientes/productor/img8.webp'
import img9 from '../../../../assets/img/home/clientes/productor/img9.webp'
import img10 from '../../../../assets/img/home/clientes/productor/img10.webp'
import img11 from '../../../../assets/img/home/clientes/productor/img11.webp'
import img12 from '../../../../assets/img/home/clientes/productor/img12.webp'
import img13 from '../../../../assets/img/home/clientes/productor/img13.webp'
import img14 from '../../../../assets/img/home/clientes/productor/img14.webp'
import img15 from '../../../../assets/img/home/clientes/productor/img15.webp'
import img16 from '../../../../assets/img/home/clientes/productor/img16.webp'
import img17 from '../../../../assets/img/home/clientes/productor/img17.webp'
import img18 from '../../../../assets/img/home/clientes/productor/img18.webp'
import img19 from '../../../../assets/img/home/clientes/productor/img19.webp'
import img20 from '../../../../assets/img/home/clientes/productor/img20.webp'
import img21 from '../../../../assets/img/home/clientes/productor/img21.webp'
import img22 from '../../../../assets/img/home/clientes/productor/img22.webp'

// img semilleros 
import imgs1 from '../../../../assets/img/home/clientes/semilleros/img1.webp';
import imgs2 from '../../../../assets/img/home/clientes/semilleros/img2.webp';
import imgs3 from '../../../../assets/img/home/clientes/semilleros/img3.webp';
import imgs4 from '../../../../assets/img/home/clientes/semilleros/img4.webp';
import imgs5 from '../../../../assets/img/home/clientes/semilleros/img5.webp';
import imgs6 from '../../../../assets/img/home/clientes/semilleros/img6.webp';
import imgs7 from '../../../../assets/img/home/clientes/semilleros/img7.webp';

// img seguros 
import imgSe1 from '../../../../assets/img/home/clientes/seguros/img1.webp';
import imgSe2 from '../../../../assets/img/home/clientes/seguros/img2.webp';
import imgSe3 from '../../../../assets/img/home/clientes/seguros/img3.webp';
import imgSe4 from '../../../../assets/img/home/clientes/seguros/img4.webp';
import imgSe5 from '../../../../assets/img/home/clientes/seguros/img5.webp';
import imgSe6 from '../../../../assets/img/home/clientes/seguros/img6.webp';
import imgSe7 from '../../../../assets/img/home/clientes/seguros/img7.webp';

// img bancos 
import imgB1 from '../../../../assets/img/home/clientes/bancos/img1.webp';
import imgB2 from '../../../../assets/img/home/clientes/bancos/img2.webp';


const productores = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22];
const semilleros = [imgs1, imgs2, imgs3, imgs4, imgs5, imgs6, imgs7];
const seguros    = [imgSe1, imgSe2, imgSe3, imgSe4, imgSe5, imgSe6, imgSe7];
const bancos     = [imgB1, imgB2];

function LogoGrid({ items }) {
  return (
    
    <Row xs={1} sm={2} md={3} lg={4} className="g-3">
      {items.map((src, i) => (
        <Col key={i}>
          <div className="logo-tile">
            <img src={src} alt={`Logo ${i+1}`} loading="lazy" />
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default function Clientes() {
  const [key, setKey] = useState('productor');

  return (
    <section className="container-fluid py-4">
      <Container>
        <h2 className="text-center color-font fw-bold mb-4">CONFÍAN EN NOSOTROS</h2>

        <Tabs
          id="clientes-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-4 clientes-tabs  "
        >
          <Tab eventKey="productor" title="PRODUCTOR">
            <LogoGrid items={productores} />
          </Tab>

          <Tab eventKey="semilleros" title="SEMILLEROS/AGROQUÍMICAS">
            <LogoGrid items={semilleros} />
          </Tab>

          <Tab eventKey="seguros" title="SEGUROS">
            <LogoGrid items={seguros} />
          </Tab>

          <Tab eventKey="bancos" title="BANCOS">
            <LogoGrid items={bancos} />
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
}
