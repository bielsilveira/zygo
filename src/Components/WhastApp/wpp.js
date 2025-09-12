import './wpp.css';
import { FaWhatsapp } from "react-icons/fa6";

function Wpp() {
  return (
    <a
      href="https://wa.me/5521972934744?text=Quero%20tornar%20minha%20opera%C3%A7%C3%A3o%20mais%20eficiente%20com%20a%20Zygo!" 
      className="icon-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default Wpp;