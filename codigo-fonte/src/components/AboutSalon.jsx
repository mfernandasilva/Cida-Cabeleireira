"use client";
import Image from "next/image";

export default function AboutSalon() {
  const features = [
    "Profissionais com anos de experiência",
    "Produtos de Alta Qualidade",
    "Atendimento personalizado e exclusivo",
    "Ambiente sofisticado e acolhedor"
  ];

  return (
    <section className="about" id="sobre">
        <div className="about-blur blur-1"></div>
        <div className="about-blur blur-2"></div>
        <div className="about-blur blur-3"></div>
      <div className="about-container">
        
        <div className="about-visual">
          <div className="grid-item item-1">
            <Image src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600" alt="Interior do Salão" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="grid-item item-2">
            <Image src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600" alt="Procedimento" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="grid-item item-3">
            <Image src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=600" alt="Detalhe Decoração" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div className="about-content">
          <span className="about-overline">Nossa História</span>
          <h2 className="about-title">Mais de <span>25 anos</span> elevando o conceito de beleza</h2>
          
          <p className="about-description">
            Desde a nossa fundação, nossa missão é unir tradição e inovação. 
            Nascemos da paixão por cuidar de pessoas e evoluímos para nos tornar 
            referência em resultados impecáveis e bem-estar.
          </p>

          <ul className="about-list">
            {features.map((item, index) => (
              <li key={index}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="about-stats">
            <div className="stat-item">
              <strong>25+</strong>
              <span>Anos de História</span>
            </div>
            <div className="stat-item">
              <strong>1k+</strong>
              <span>Clientes Felizes</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}