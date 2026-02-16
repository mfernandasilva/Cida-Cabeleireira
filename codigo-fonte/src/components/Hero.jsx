"use client";
import Image from "next/image";
import { handleWhatsappClick } from "../utils/whatsapp"; 

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-blur blur-1"></div>
      <div className="hero-blur blur-2"></div>

      <div className="hero-image-container">
        <Image
          src="/background-hero.png"
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
          
          <button 
            className="hero-button-ghost"
            onClick={() => handleWhatsappClick("Olá Cida! Gostaria de agendar um atendimento.")}
          >
            Agendar atendimento
          </button>
        </div>
      </div>
    </section>
  );
}