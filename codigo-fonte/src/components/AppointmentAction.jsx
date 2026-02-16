"use client";
import Image from "next/image";
import { handleWhatsappClick } from "../utils/whatsapp"; 

export default function AppointmentAction() {
  const column1 = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400&auto=format&fit=crop"
  ];

  const column2 = [
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=400&auto=format&fit=crop"
  ];

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <span className="cta-overline">Experiência Exclusiva</span>
            <h2 className="cta-title">Agende seu horário e sinta a <span>transformação</span></h2>
            <p className="cta-description">
              Sua beleza merece um momento dedicado. Escolha o melhor horário para você e deixe nossa equipe cuidar de cada detalhe.
            </p>
            <button className="cta-button"   onClick={() => handleWhatsappClick("Olá Cida! Gostaria de agendar um atendimento. Qual sua disponibilidade? ")}>
              Agendar Atendimento
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </button>
          </div>

          <div className="cta-visual">
            <div className="marquee-column up">
              {[...column1, ...column1].map((img, i) => (
                <div key={i} className="marquee-card">
                  <Image src={img} alt="Salão" fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
            <div className="marquee-column down">
              {[...column2, ...column2].map((img, i) => (
                <div key={i} className="marquee-card">
                  <Image src={img} alt="Salão" fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}