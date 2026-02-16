"use client";

export default function LocationSection() {
  const schedule = [
    { day: "Segunda a Sexta", hours: "09:00 — 19:00" },
    { day: "Sábado", hours: "09:00 — 19:00" },
    { day: "Domingo", hours: "Sob consulta" },
  ];

  return (
    <section className="location" id="contato">
      <div className="location-container">
        
        <div className="location-info">
          <span className="location-overline">Visite-nos</span>
          <h2 className="location-title">Onde a <span>beleza</span> acontece</h2>
          
          <div className="location-details">
            <div className="detail-item">
              <strong>Endereço</strong>
              <p>Rua Bom Pastor, 430 - Iputinga<br />Recife, PE</p>
            </div>
            
            <div className="detail-item">
              <strong>Horários</strong>
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

          <button className="directions-btn">
            Como chegar
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </button>
        </div>

        <div className="location-map-wrapper">
          <div className="map-placeholder">
             <div className="pin-3d">
                <div className="pin-head"></div>
                <div className="pin-shadow"></div>
             </div>
          </div>
          <div className="map-overlay-card">
            <p><strong>Cida Cabeleireira</strong></p>
            <span>Estacionamento no local</span>
          </div>
        </div>

      </div>
    </section>
  );
}