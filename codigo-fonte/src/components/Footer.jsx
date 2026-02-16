"use client";
import Link from "next/link";
import { handleWhatsappClick } from "../utils/whatsapp"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2 className="footer-logo">Cida Cabeleireira </h2>
          <p className="footer-bio">
            Elevando o padrão de beleza e bem-estar há mais de 25 anos. 
            Sua essência, nossa maior inspiração.
          </p>
          <div className="footer-socials">
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link href="https://wa.me/seunumeroaqui" target="_blank" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.9 1.1L21 3z"></path></svg>
            </Link>
          </div>
        </div>

        <div className="footer-links">
          <h3>Navegação</h3>
          <ul>
            <li><Link href="/">Início</Link></li>
            <li><Link href="#servicos">Serviços</Link></li>
            <li><Link href="#sobre">Sobre Nós</Link></li>
            <li><Link href="#contato">Localização</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Contato Direto</h3>
          <ul className="footer-contact-list">
            <li>
               <small>WhatsApp</small>
               <Link href="https://wa.me/5581999999999">(81) 98684-8017</Link>
            </li>
            <li>
               <small>Telefone Fixo</small>
               <span>(81) 3271-0803</span>
            </li>
          </ul>
        </div>

        <div className="footer-contact-cta">
          <h3>Agendamento</h3>
          <p>Reserve seu horário e viva uma experiência única de cuidado.</p>
          <button className="footer-contact-btn"  onClick={() => handleWhatsappClick("Olá Cida! Vi seu site e gostaria de agendar um atendimento.")}>
            Agendar Agora
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Cida Cabeleireira. Todos os direitos reservados.</p>
          <div className="footer-legal">
            <span>Desenvolvido por Maria Fernanda</span>
          </div>
        </div>
      </div>
    </footer>
  );
}