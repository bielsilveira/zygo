import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.css";



function Header() {
  /* Estado para mudança de estilo ao rolar a página após 50px */
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Navbar fixa no topo com mudança de estilo ao rolar a página em 50px */
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`header ${isScrolled ? "scrolled" : "not-scrolled"}`}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          Zygo
        </Navbar.Brand>

        {/* Toggle para mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/services">Serviços</Nav.Link>
            
            {/* Ativar dropdown de Soluções após a conclusão da tela de cada serviço*/}
            {/*<NavDropdown title="Soluções" id="solucoes-dropdown">
              <NavDropdown.Item as={Link} to="/Services/dev">
                Desenvolvimento de Software
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Services/ia">
                Inteligência Artificial
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Services/support">
                Suporte Técnico
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Services/consultoria">
                Consultoria de TI
              </NavDropdown.Item>
            </NavDropdown>*/}

            {/*<Nav.Link as={Link} to="/plans">Planos</Nav.Link>*/}
            <Nav.Link as={Link} to="/contact">Contato</Nav.Link>

            {/*<Nav.Link as={Link} to="/cliente" className="d-flex align-items-center">
            <FaUser className="me-1" /> Área do Cliente
            </Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
