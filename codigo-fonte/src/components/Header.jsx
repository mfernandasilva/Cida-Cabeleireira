"use client";
import { FaWhatsapp } from "react-icons/fa";
import { handleWhatsappClick } from "../utils/whatsapp";

export default function Header() {
  return (
    <header className="header">
      <div className="container navbar">
        <div className="logo">Cida Cabeleireira</div>

        <nav className="nav-links">
          <a href="#hero">Inicio</a>
          <a href="#services">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <div>
            <button 
              className="btn-primary btn-whatsapp"
              onClick={() => handleWhatsappClick("Olá, Cida! Vi seu site e gostaria de consultar os horários disponíveis para esta semana.")}
            >
                <FaWhatsapp className="whatsapp-icon" />
                Entrar em contato
            </button>
        </div>
      </div>
    </header>
  );
}