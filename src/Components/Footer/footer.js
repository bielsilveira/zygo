import { Row, Col } from "react-bootstrap";
import { LuLinkedin, LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";
import './footer.css';

function Footer() {
  return (
    <footer>
      {/* Logo  */}
      <Row>
        <Col xs={12} md={4} className="footer-col1">
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h3 style={{ color: '#3EC4F0', fontFamily: 'MuseoModerno, sans-serif', fontSize: '1.9rem', fontWeight: 'bold', marginBottom: '25px' }}>Zygo</h3>
          </Link>
        {/* Descrição */}
          <p style={{ color: '#f5f5f5', fontSize: '14px' }}>
            Transformamos ideias em soluções tecnológicas inovadoras. Sua parceira ideal para crescer no mundo digital.
          </p>
          {/* Ícone do LinkedIn */}
          <a href="https://www.linkedin.com/company/zygo-it/" target="_blank" rel="noopener noreferrer">
            <LuLinkedin className="LuLinkedin" />
          </a>
        </Col>
        {/* Serviços */}
        <Col xs={12} md={2} className="footer-col2">
          <h3 style={{ marginBottom: '25px' }}>Serviços</h3>
          <div className="footer-services-links">
          <ul>
            <li><Link to="../../Pages/Services/services.js">Desenvolvimento de Software</Link></li>
            <li><Link to="../../Pages/Services/services.js">Agente de IA</Link></li>
            <li><Link to="../../Pages/Services/services.js">Suporte Técnico</Link></li>
            <li><Link to="../../Pages/Services/services.js">Consultoria de TI</Link></li>
          </ul>
          </div>
        </Col>
        {/* Informações de Contato */}
        <Col xs={12} md={2} className="footer-col3">
          <div>
            <h3 style={{ marginBottom: '25px' }}>Contato</h3>
            <div className="contact-info">
              <div className="LuPhone">
                <LuPhone  />
                <span className="text-contact">(21) 97293-4744</span>
              </div>
              <div className="LuMail" >
                <LuMail />
                <span className="text-contact">contato@zygoit.com.br</span>
              </div>
              <div className="LuMapPin">
                <LuMapPin />
                <span className="text-contact">Rio de Janeiro, RJ</span>
              </div>
            </div>
          </div>
        </Col>
        </Row>
        {/* Linha estilizada separando o footer */}
        <Row>
          <Col fluid="md">
            <hr className="footer-separator" />
            </Col>
        </Row>
        {/* Links Rápidos  e Copyright */}
        <Row>
          <Col xs={12} md={6}>
            <div className="footer-links">
              <Link to='/contact'>Contato</Link>
              <Link to='/services'>Serviços</Link>
              <Link to='/about'>Sobre Nós</Link>
              <Link to='/portfolio'>Portfólio</Link>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <p className="footer-copyright">&copy; 2023 Zygo IT. All rights reserved.</p>
          </Col>
        </Row>
    </footer>
  );
}

export default Footer;
