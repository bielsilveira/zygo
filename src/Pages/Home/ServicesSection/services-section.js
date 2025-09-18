import './services-section.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';

function ServicesSection() {
    return (
        /* Título e Descrição da Seção de Serviços */
        <div className='services-section-container' id='services-section'>
            <h2 className='services-section-title'>Nossos Serviços</h2>
                <p className='services-section-description'>
                    Oferecemos soluções completas em tecnologia para empresas que querem crescer e se destacar no mercado digital.
                </p>
            <Row className="g-4">
                {/* Seção de Serviços */}
                {/* Serviço 1: Desenvolvimento de Software */}
                <Col xs={12} md={4} className="d-flex justify-content-center">
                    <ServiceCard
                        title="Desenvolvimento de Software"
                        image="/images/desenvolvimento.jpg"
                        text="Criamos soluções personalizadas para automatizar processos, otimizar operações e impulsionar o crescimento do seu negócio."
                        listItems={[
                            "Aplicações Web e Mobile",
                            "Sistemas de Gestão",
                            "E-commerce",
                            "APIs e Integrações",
                        ]}
                    />
                </Col>
                {/* Serviço 2: Inteligência Artificial */}
                <Col xs={12} md={4} className="d-flex justify-content-center">
                    <ServiceCard
                        title="Inteligência Artificial"
                        image="/images/AgenteIA.png"
                        text="Desenvolvemos assistentes virtuais inteligentes que automatizam atendimento, vendas e processos internos da sua empresa."
                        listItems={[
                            "Chatbots Inteligentes",
                            "Automação de Processos",
                            "Análise de Dados",
                            "Personalização de Experiência",
                        ]}
                    />
                </Col>
                {/* Serviço 3: Suporte de TI */}
                <Col xs={12} md={4} className="d-flex justify-content-center">
                    <ServiceCard
                        title="Suporte de TI"
                        image="/images/Support.jpg"
                        text="Oferecemos suporte técnico especializado para garantir o funcionamento ideal dos sistemas e infraestrutura da sua empresa."
                        listItems={[
                            "Suporte Remoto e Presencial",
                            "Manutenção Preventiva",
                            "Monitoramento de Sistemas",
                            "Consultoria em TI",
                        ]}
                    />
                </Col>
            </Row>
        </div>
    );
}
/* Componente para o Card de Serviço */
function ServiceCard({ title, image, text, listItems }) {
    return (
        <Card style={{ width: '100%', maxWidth: '30rem', height: '100%' }}>
            <Card.Img variant="top" src={image} style={{ height: '15rem', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                {listItems && (
                    <ListGroup variant="flush" className="mb-3">
                        {listItems.map((item, index) => (
                            <ListGroup.Item key={index}>{item}</ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
                <Button className='service-card-button' as={Link} to="/services" style={{ backgroundColor: '#014669', width: '100%', border: 'none' }}>Saiba mais</Button>
            </Card.Body>
        </Card>
    );
}


export default ServicesSection;