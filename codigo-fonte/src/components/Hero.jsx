"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-blur blur-1"></div>
      <div className="hero-blur blur-2"></div>

      <div className="hero-image-container">
        <Image
          src="/hero-image.png"
          alt="Beleza"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="hero-content-container">
        <div className="hero-rotating-circle" />
        
        <div className="hero-text-wrapper">
          <h1 className="hero-title">Beleza</h1>
          <h2 className="hero-title-secondary">
            que transforma sua presença
          </h2>
          <a href="#agendamento" className="hero-button-ghost">
            Agendar atendimento
          </a>
        </div>
      </div>
    </section>
  );
}