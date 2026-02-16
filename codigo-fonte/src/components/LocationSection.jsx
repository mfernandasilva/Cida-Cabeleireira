"use client";
import React from "react";

export default function LocationSection() {
  const schedule = [
    { day: "Segunda a Sexta", hours: "09:00 — 19:00" },
    { day: "Sábado", hours: "09:00 — 19:00" },
    { day: "Domingo", hours: "Fechado" },
  ];

  // Lógica funcional de status
  const checkStatus = () => {
    if (typeof window === "undefined") return { text: "Carregando...", class: "closed" };
    const agora = new Date();
    const diaSemana = agora.getDay();
    const hora = agora.getHours();

    if (diaSemana >= 1 && diaSemana <= 6) { // Seg a Sáb
      if (hora >= 9 && hora < 19) {
        return { text: "Aberto agora", class: "open" };
      }
    }
    return { text: "Fechado agora", class: "closed" };
  };

  const status = checkStatus();

  const handleDirections = () => {
    const address = encodeURIComponent("Rua Bom Pastor, 430 - Iputinga, Recife - PE");
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, "_blank");
  };

  return (
    <section className="location" id="contato">
      {/* Wrapper da Borda Animada */}
      <div className="location-border-wrapper">
        <div className="location-container">
          
          <div className="location-info">
            <span className="location-overline">Onde estamos</span>
            <h2 className="location-title">Onde a <span>beleza</span> acontece</h2>
            
            <div className="location-details">
              <div className="detail-item">
                <strong>Endereço Profissional</strong>
                <p>Rua Bom Pastor, 430 - Iputinga<br />Recife, PE</p>
              </div>
              
              <div className="detail-item">
                <strong>Horários de Atendimento</strong>
                <ul className="schedule-list">
                  {schedule.map((item, idx) => (
                    <li key={idx}>
                      <span>{item.day}</span>
                      <span className="dots"></span>
                      <span>{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="directions-btn" onClick={handleDirections}>
              Como chegar
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </button>
          </div>

          <div className="location-map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.553472304958!2d-34.9317582!3d-8.0450543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1966037089b1%3A0x6734749f50e70e28!2sR.%20Bom%20Pastor%2C%20430%20-%20Iputinga%2C%20Recife%20-%20PE%2C%2050670-430!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Mapa do Salão"
            ></iframe>
            
            <div className="map-overlay-card">
              <div className={`status-badge ${status.class}`}>
                {status.text}
              </div>
              <p><strong>Cida Cabeleireira</strong></p>
              <span>Estacionamento privativo</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}