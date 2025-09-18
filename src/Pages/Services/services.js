import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  './services.css';

export function Services() {
  // Array com os dados dos grids de serviços
  const services = [
    {
      title: "Desenvolvimento de Software",
      description: "Criamos aplicações web e mobile personalizadas, desde MVPs até sistemas empresariais complexos.",
      features: [
        "Soluções de BI e Dashboards",
        "Aplicativos Mobile",
        "APIs e Integrações",
        "E-commerce Completo",
        "Desenvolvimento de Software Sob Medida",
        "Criação de Sites e Landing Pages"
      ],
      icon: "💻",
      color: "#011f2e"
    },
    {
      title: "Agentes de IA",
      description: "Desenvolvemos soluções de inteligência artificial que automatizam processos e melhoram a eficiência.",
      features: [
        "Chatbots Inteligentes",
        "Automação de Processos",
        "Geração de Conteúdo",
        "Análise de Dados",
        "Personalização de Experiência do Cliente",
        "Integração de IA com Sistemas Existentes"
      ],
      icon: "🤖",
      color: "#6f42c1"
    },
    {
      title: "Suporte Técnico",
      description: "Oferecemos suporte completo para manter seus sistemas funcionando perfeitamente 24/7.",
      features: [
        "Segurança da Informação",
        "Rede e Infraestrutura",
        "Suporte a Computadores e Sistemas",
        "Suporte a Sistemas em Nuvem e E-mail Corporativo",
        "Atendimento Técnico e Gestão de Ativos",
        "Monitoramento e Gestão Proativa de TI"
      ],
      icon: "🛠️",
      color: "#014669"
    }
  ];

  // Renderização dos serviços
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh"}}>
      <Container className="py-5">
        {/* Título e descrição */}
        <div className="text-center mb-5">
          <h1 className="display-4" style={{ fontFamily: 'Museo Moderno, sans-serif', marginTop: '20px' }}>
            Nossos Serviços
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Oferecemos soluções completas em tecnologia para transformar suas ideias em realidade e acelerar o crescimento do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        {services.map((service, index) => (
          <Row
            className={`align-items-center mb-5 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            key={index}
          >
            <Col md={6} className="mb-4 mb-md-0">
              <div className="d-flex align-items-start flex-column">
                <div className={`text-white d-flex align-items-center justify-content-center mb-3`} 
                  style={{ width: '64px', height: '64px', fontSize: '24px', backgroundColor: service.color, borderRadius: '50%' }}>
                  {service.icon}
                </div>
                <h2>{service.title}</h2>
                <p className="text-muted">{service.description}</p>

                <Row>
                  {service.features.map((feature, i) => (
                    <Col sm={6} key={i} className="mb-2 d-flex align-items-start">
                      <span className="text-success me-2">✔</span>
                      <span>{feature}</span>
                    </Col>
                  ))}
                </Row>

                {/* <Button className="mt-3 button-hover-effect"
                        style={{ backgroundColor: service.color, border: 'none', cursor: 'pointer' }}>
                  Saiba Mais
                </Button> */}
              </div>
            </Col>

            <Col md={6}>
              <Card className="shadow card-hover-effect" style={{ cursor: 'pointer' }}>
                <Card.Body className="d-flex align-items-center justify-content-center" style={{ height: '250px' }}>
                  <div className={` w-100 h-100 rounded d-flex align-items-center justify-content-center text-white`} 
                  style={{ fontSize: '48px', backgroundColor: service.color }}>
                    {service.icon}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}

        {/* Seção de Processo */}
        <div className="text-center my-5">
          <h2>Nosso Processo</h2>
          <p className="text-muted mb-4">
            Seguimos uma metodologia comprovada para garantir o sucesso do seu projeto
          </p>
          <Row>
            {[
              { step: "1", title: "Análise", description: "Entendemos suas necessidades e objetivos" },
              { step: "2", title: "Planejamento", description: "Criamos um roadmap detalhado do projeto" },
              { step: "3", title: "Desenvolvimento", description: "Executamos com qualidade e agilidade" },
              { step: "4", title: "Entrega", description: "Implementamos e oferecemos suporte contínuo" }
            ].map((process, index) => (
              <Col md={3} key={index} className="mb-4">
                <div className="text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px', fontSize: '20px', backgroundColor: '#014669' }}>
                  {process.step}
                </div>
                <h5>{process.title}</h5>
                <p className="text-muted">{process.description}</p>
              </Col>
            ))}
          </Row>
        </div>

        {/* Seção de CTA */}
        <div className="text-center bg-white p-5 rounded shadow">
          <h2>Pronto para começar seu projeto?</h2>
          <p className="text-muted mb-4">
            Entre em contato conosco e vamos transformar sua ideia em realidade
          </p>
          <Link 
            to="https://wa.me/5521972934744?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Zygo%20IT."
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="primary" size="lg" style={{ backgroundColor: '#014669', border: 'none', cursor: 'pointer' }} className="button-hover-effect">
              Falar com Especialista
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Services;