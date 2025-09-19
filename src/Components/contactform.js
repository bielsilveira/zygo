import { Alert } from "react-bootstrap";
import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

function ContactForm({ setAlert }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, service, message } = formData;

    if (!firstName || !lastName || !email || !phone || !service || !message) {
      setAlert({
        show: true,
        type: "danger",
        message: "Por favor, preencha todos os campos obrigatórios."
      });
      return;
    }

    try {
      /*const response = await fetch("http://localhost:5678/webhook-test/contato",*/
      const response = await fetch("https://n8n-gabriel-pinheiro.fly.dev/webhook/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setAlert({
          show: true,
          type: "success",
          message: "Mensagem enviada com sucesso!"
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: ""
        });
      } else {
        setAlert({
          show: true,
          type: "danger",
          message: "Erro ao enviar. Tente novamente."
        });
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setAlert({
        show: true,
        type: "danger",
        message: "Erro inesperado. Tente novamente mais tarde."
      });
    }
  };

  return (
    <>
      {alert.show && (
        <Alert
          variant={alert.type}
          dismissible
          onClose={() => setAlert({ ...alert, show: false })}
        >
          {alert.message}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>Nome *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Seu nome"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Sobrenome *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Seu sobrenome"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail *</Form.Label>
          <Form.Control
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Telefone *</Form.Label>
          <Form.Control
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="company">
          <Form.Label>Empresa</Form.Label>
          <Form.Control
            placeholder="Nome da sua empresa"
            value={formData.company}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="service">
          <Form.Label>Serviço de Interesse *</Form.Label>
          <Form.Select
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Selecione um serviço</option>
            <option value="desenvolvimento">Desenvolvimento de Software</option>
            <option value="ia">Agentes de IA</option>
            <option value="suporte">Suporte Técnico</option>
            <option value="consultoria">Consultoria</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Mensagem *</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Conte-nos mais sobre seu projeto..."
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          style={{ backgroundColor: "#014669", border: "none" }}
          size="lg"
          type="submit"
          className="w-100"
        >
          Enviar Mensagem
        </Button>
      </Form>
    </>
    
  );
}

export default ContactForm;
