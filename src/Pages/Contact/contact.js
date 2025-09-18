import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaLinkedin, FaRegClock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";
import ContactForm from "../../Components/contactform";
import { Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";


function Contact() {
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  return (
    <div style={{ backgroundColor: "#f1f3f5", minHeight: "100vh" }}>
      <Container className="py-5">
        

        <div className="text-center mb-5">
          <h1 className="display-4 mb-3 text-primary" style={{ fontFamily: "Roboto, sans-serif", marginTop: "30px" }}>
            Entre em Contato
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Estamos aqui para ajudar você a transformar suas ideias em realidade.
            Entre em contato conosco e vamos conversar sobre seu projeto.
          </p>
        </div>

        <ToastContainer position='bottom-start' className="p-3" style={{ zIndex: 9999 }}>
          <Toast
            onClose={() => setAlert({ ...alert, show: false })}
            show={alert.show}
            delay={4000}
            autohide
            bg={alert.type === "danger" ? "danger" : "success"}
          >
          <Toast.Header closeButton>
            <strong className="me-auto">
              {alert.type === "danger" ? "Erro" : "Sucesso"}
            </strong>
          </Toast.Header>
          <Toast.Body className="text-white">{alert.message}</Toast.Body>
          </Toast>
        </ToastContainer>


        <Row className="g-5">
          <Col lg={6}>
            <Card className="shadow-lg">
                <Card.Body className="p-4">
                  <h2 className="h4 mb-4">Envie uma mensagem</h2>
                  <ContactForm setAlert={setAlert} />
                </Card.Body>
              </Card>
            </Col>

          {/* Contact Info */}
          <Col lg={6}>
            {/* Informações de Contato */}
            <Card className="shadow-lg mb-4">
              <Card.Body>
                <h2 className="h4 mb-4">Informações de Contato</h2>
                <p className="mb-2">
                  <LuMapPin style={{ marginRight: "8px" }} />
                  <strong>Endereço:</strong> Rio de Janeiro, RJ, Brasil
                </p>
                <p className="mb-2">
                  <FiPhone style={{ marginRight: "8px" }} />
                  <strong>Telefone:</strong> +55 (21) 97293-4744
                </p>
                <p className="mb-2">
                  <MdOutlineEmail style={{ marginRight: "8px" }} />
                  <strong>E-mail:</strong> contato@zygoit.com.br / comercial@zygoit.com.br
                </p>
                <p>
                  <FaRegClock style={{ marginRight: "8px" }} />
                  <strong>Horário:</strong> Segunda a Sexta: 9h às 18h
                </p>
              </Card.Body>
            </Card>

            {/* Redes Sociais */}
            <Card className="shadow-lg mb-4">
              <Card.Body>
                <h2 className="h4 mb-4">Redes Sociais</h2>
                <div className="d-flex gap-3">
                  <Link className="rounded-circle d-flex align-items-center justify-content-center" 
                  to="https://www.linkedin.com/company/zygo-it/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ width: "50px", height: "50px", backgroundColor: "#014669", textDecoration: "none" }}>
                    <FaLinkedin style={{ width: "38px", height: "38px", padding: "5px", color: "#fff" }} />
                  </Link>
                </div>
              </Card.Body>
            </Card>

            {/* Ações rápidas */}
            <Card className="shadow-lg">
              <Card.Body>
                <h2 className="h4 mb-4">Ações Rápidas</h2>
                <div className="d-grid gap-2">
                  <Link to="https://wa.me/5521972934744?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Zygo%20IT."
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button
                      style={{border: '1px solid black', width: '100%', backgroundColor: 'transparent', color: 'black', textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}>
                      Falar com um Especialista
                    </Button>
                  </Link>
                  <Link to="https://wa.me/5521972934744?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20com%20um%20especialista%20da%20Zygo%20IT."
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button
                      style={{border: '1px solid black', width: '100%', backgroundColor: 'transparent', color: 'black', textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}>
                      Agendar Reunião
                    </Button>
                  </Link>
                  {/* Botão será ativado quando o portfólio estiver disponível */}
                  {/*<Button variant="outline-primary">Download Portfólio</Button>*/}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Contact;