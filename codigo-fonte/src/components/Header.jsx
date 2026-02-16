import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="container navbar">
        
        <nav className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
        
        <div className="logo">
          Cida Cabeleireira
        </div>

        <div>
            <button className="btn-primary btn-whatsapp">
                <FaWhatsapp className="whatsapp-icon" />
                Entrar em contato
            </button>
        </div>

      </div>
    </header>
  );
}
