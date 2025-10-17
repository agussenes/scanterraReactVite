import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// estilo 
import './TabsSolEs.css';

function TabsSolEs() {
    const [key, setKey] = useState('productor');
    return (

        <>
            <section className="container-fluid py-5 ">
                <Container>
                    <Tabs
                        id="clientes-tabs"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-4 clientes-tabs  "
                    >
                        <Tab eventKey="productor" title="PRODUCTOR">
                        </Tab>

                        <Tab eventKey="semilleros" title="SEMILLEROS/AGROQUÍMICAS">
                        </Tab>

                        <Tab eventKey="seguros" title="SEGUROS">
                        </Tab>

                        <Tab eventKey="bancos" title="BANCOS">
                        </Tab>
                    </Tabs>

                </Container>
            </section >
        </>
    )
}

export default TabsSolEs;