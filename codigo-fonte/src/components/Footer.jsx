"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2 className="footer-logo">CIDA<span>Cabeleireira</span></h2>
          <p className="footer-bio">
            Elevando o padrão de beleza e bem-estar há mais de 25 anos. 
            Sua essência, nossa maior inspiração.
          </p>
          <div className="footer-socials">
            <Link href="#" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link href="#" aria-label="WhatsApp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.9 1.1L21 3z"></path></svg>
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
          <h3>Especialidades</h3>
          <ul>
            <li>Corte & Estilo</li>
            <li>Coloração Premium</li>
            <li>Tratamentos Capilares</li>
            <li>Manicure & Spa</li>
          </ul>
        </div>

        <div className="footer-contact-cta">
          <h3>Atendimento</h3>
          <p>Dúvidas ou agendamentos? Fale conosco agora mesmo.</p>
          <button className="footer-contact-btn">
            Entrar em Contato
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Cida Cabeleireira. Todos os direitos reservados.</p>
          <div className="footer-legal">
            <Link href="#">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}