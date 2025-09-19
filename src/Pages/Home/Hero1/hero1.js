import './hero1.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Hero1() {
    return (
        <div className='hero1-container'>
            <Container>
                <Row>
                    <Col>
                        <div className="hero1-text">
                            <h1 className='hero1-title'>Soluções em Tecnologia<br /> que Transformam Negócios</h1>
                            <p className='hero1-description'>Na Zygo, oferecemos desenvolvimento de software personalizado, agentes de IA inteligentes e suporte técnico especializado para levar sua empresa ao próximo nível tecnológico.</p>
                            <div className="hero1-buttons">
                                <Button variant="light" as={Link} to="/services" smooth={true} duration={500} style={{ marginRight: '10px' }}>Conheça Nossos Serviços</Button>
                                <Button variant="light" as={Link} to="/contact">Fale Conosco</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero1;
