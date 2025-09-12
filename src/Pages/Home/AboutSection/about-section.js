import { Col, Row } from "react-bootstrap";
import "./about-section.css";
import { IoDiamondOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { GiFlagObjective } from "react-icons/gi";
import { TbEyeSpark } from "react-icons/tb";




function AboutSection() {
  return (
    <div style={{ backgroundColor: "#f9f9f9", padding: "40px 0" }}>
      <div className="container my-5" style={{ maxWidth: "1200px"}}>
        <Row className="about-section">
            <Col md={6} sm={12}>
                <h2 className="about-title">Sobre A Zygo</h2>
                <p className="about-text">
                    Somos uma empresa especializada em soluções tecnológicas inovadoras, comprometida em transformar
                    a forma como as empresas operam no mundo digital. Nossa equipe de especialistas combina expertise técnica
                    com visão estratégica para entregar resultados excepcionais.
                    <br />
                    <br />
                    Desde nossa fundação, focamos em criar soluções personalizadas que atendem às necessidades específicas de cada cliente, utilizando as mais modernas tecnologias disponíveis no mercado.
                </p>
            </Col>
            <Col  md={6} sm={6} className="about-image">
                <img className="img-fluid" src="/images/aboutus.jpg" alt="Sobre A Zygo" style={{ marginTop: "10px", borderRadius: "8px" }}/>
            </Col>
        </Row>
        <hr style={{ margin: "40px 0", borderTop: "3px solid #ccc" }} />
        <div className="about-metrics">
        <Row>
            <Col md={6} sm={6}>
                <div className="missao-icon">
                    <TbTargetArrow style={{ fontSize: "50px" }} />
                        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Missão</p>
                        <ul style={{ fontSize: "14px" }}>
                            <li>Entregar soluções tecnológicas completas do desenvolvimento de software e aplicações web/mobile à consultoria estratégica 
                            e suporte técnico para acelerar a transformação digital dos nossos clientes.</li>
                        </ul>
                </div>
            </Col>
            <Col md={6} sm={6}>
                <div className="visao-icon">
                    <TbEyeSpark style={{ fontSize: "50px" }} />
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>Visão</p>
                    <ul style={{ fontSize: "14px" }}>
                        <li>Ser referência no Brasil em inovação tecnológica e suporte estratégico, 
                        unindo desenvolvimento, consultoria e inteligência artificial para potencializar negócios.</li>
                    </ul>
                </div>
            </Col>
            <Col md={6} sm={6}>
                <div className="valores-icon">
                    <IoDiamondOutline style={{ fontSize: "50px" }} />
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>Valores</p>
                    <ul style={{ fontSize: "14px" }}>
                        <li>Inovação: Criar soluções modernas e eficientes.</li>
                        <li>Parceria: Trabalhar junto aos clientes como aliados estratégicos.</li>
                        <li>Excelência: Qualidade e agilidade em cada entrega.</li>
                        <li>Transparência: Comunicação clara e ética em todos os processos.</li>
                        <li>Foco no Cliente: Entender e superar as expectativas dos clientes.</li>
                        <li>Escalabilidade: Soluções que acompanham o crescimento dos clientes.</li>
                    </ul>
                </div>
            </Col>
            <Col md={6} sm={6}>
                <div className="objetivo-icon">
                    <GiFlagObjective style={{ fontSize: "50px" }} />
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>Objetivo</p>
                    <ul style={{ fontSize: "14px" }}>
                        <li>Desenvolver softwares e aplicações web/mobile sob medida.</li>
                        <li>Oferecer suporte técnico especializado N1, N2 e N3.</li>
                        <li>Prestar consultoria estratégica para empresas que necessitam apoio tecnológico.</li>
                        <li>Integrar inteligência artificial em processos corporativos.</li>
                        <li>Expandir a presença da Zygo no mercado corporativo nacional.</li>
                    </ul>
                </div>
            </Col>
        </Row>
        </div>
    </div>
    </div>
  );
}

export default AboutSection;