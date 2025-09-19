import { Card, Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <div className="about-container" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh"}}>
      <Container className="py-5">
      {/* Título e descrição */}
        <div className="text-center mb-5">
          <h1 className="display-4" style={{ fontFamily: 'Museo Moderno, sans-serif', marginTop: '30px' }}>
            Sobre a Zygo
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Transformamos ideias em soluções tecnológicas inovadoras, ajudando empresas a crescer e se destacar no mercado digital.
          </p>
        </div>

      {/* Cards de Missão, Visão e Valores */}
      <div className="about-cards text-center" style={{ width: '100%'}}>
        <Row className="g-4">
          <Col xs={12} md={4}>
            <Card className="align-items-center" style={{ padding: '20px', width: '100%', height: '100%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="blue" class="bi bi-lightning-charge rounded-circle" viewBox="0 0 16 16" style={{ backgroundColor: '#b8e2f4', padding: '10px', marginBottom: '10px' }}>
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"/>
              </svg>
              <h5 className="card-title">Missão</h5>
              <p className="card-text">Entregar soluções tecnológicas completas do desenvolvimento de software e aplicações web/mobile à consultoria estratégica e suporte técnico para acelerar a transformação digital dos nossos clientes.</p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="align-items-center" style={{ padding: '20px', width: '100%', height: '100%'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="green" class="bi bi-eye rounded-circle" viewBox="0 0 16 16" style={{ backgroundColor: '#bcf5bc', padding: '10px', marginBottom: '10px' }}>
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>
              <h5 className="card-title">Visão</h5>
              <p className="card-text">Ser referência no Brasil em inovação tecnológica e suporte estratégico, unindo desenvolvimento, consultoria e inteligência artificial para potencializar negócios.</p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="align-items-center" style={{ padding: '20px', width: '100%', height: '100%'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="purple" class="bi bi-heart rounded-circle" viewBox="-4 -4 24 24" style={{ backgroundColor: '#dec8ff', padding: '10px', marginBottom: '10px' }}>
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg>
              <h5 className="card-title">Valores</h5>
              <p className="card-text">Inovação, transparência, qualidade e compromisso com resultados. Acreditamos na tecnologia como força transformadora.</p>
            </Card>
          </Col>
        </Row>
      </div>
      {/* História */}
      <div style={{ width: '100%', marginTop: '50px'}}>
        <Row className="align-items-center g-4">
          <Col xs={12} md={6} className="mb-4 mb-md-0 text-flex-start">
          <h2>Nossa História</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Fundada em 2020, a Zygo nasceu da paixão por tecnologia e inovação. 
            Com o propósito de simplificar a tecnologia e torná-la uma aliada estratégica para empresas de todos os tamanhos.<br/><br/>
            Desde o início, percebemos que muitas organizações enfrentam desafios para inovar, integrar sistemas e manter um suporte tecnológico confiável. 
            Com essa visão, reunimos um time multidisciplinar de especialistas em desenvolvimento de software, aplicações web e mobile, consultoria estratégica em tecnologia e suporte técnico.<br/><br/> 
            Nosso objetivo sempre foi claro: transformar a tecnologia em resultados reais para nossos clientes. Ao longo do tempo, evoluímos para oferecer soluções ainda mais completas, incluindo inteligência artificial e automação de processos, 
            ajudando empresas a se tornarem mais competitivas e eficientes.<br/><br/>
            Hoje, a Zygo é sinônimo de inovação, agilidade e parceria, unindo experiência técnica a uma abordagem consultiva para criar soluções personalizadas que acompanham o crescimento de cada cliente.
          </p>
          </Col>
          <Col className="text-center" xs={12} md={6}>
          <div className="d-flex align-items-center justify-content-center" style={{ marginBottom: '30px', borderRadius: '10px', height: '50vh', background: 'linear-gradient(#014669 0, #011f2e)' }}>
            <div className="text-center">
          <div style={{ fontSize: '50px', padding: '20px' }}>🚀</div>
          <p style={{ color: 'white' }}>Inovação em cada projeto.</p>
          </div>
          </div>
          </Col>
        </Row>
      </div>
      </Container>
    </div>
  );
}
export default About;