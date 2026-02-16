"use client";
import { useRef } from "react";
import Image from "next/image";

const services = [
  { 
    name: "Corte", 
    desc: "Design personalizado para valorizar seu rosto e estilo único.", 
    img: "https://images.unsplash.com/photo-1614838280822-4fdea45dc3c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Escova", 
    desc: "Modelagem impecável com brilho, sedosidade e movimento aos fios.", 
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop"
  },
  { 
    name: "Depilação", 
    desc: "Técnicas suaves para uma pele lisa, macia e bem cuidada.", 
    img: "https://images.unsplash.com/photo-1700760933574-9f0f4ea9aa3b?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Hidratação", 
    desc: "Nutrição profunda que devolve a umidade e vitalidade do cabelo.", 
    img: "https://images.unsplash.com/photo-1717160675332-1a8d1080ae3d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Cauterização", 
    desc: "Selagem térmica das cutículas para fios fortalecidos e sem frizz.", 
    img: "https://images.unsplash.com/photo-1629397662600-50ad523ef4fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Reconstrução", 
    desc: "Reposição de queratina para cabelos danificados e quebradiços.", 
    img: "https://images.unsplash.com/photo-1723879371709-17908244d70a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Progressiva", 
    desc: "Alinhamento capilar moderno para um liso natural e disciplinado.", 
    img: "https://images.unsplash.com/photo-1723879371691-631902ea2fe1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" 
  },
  { 
    name: "Botox", 
    desc: "Preenchimento da fibra capilar com redução de volume e brilho intenso.", 
    img: "https://images.unsplash.com/photo-1701977501667-20c0e38f5a9d?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Unha em gel", 
    desc: "Alongamento e esmaltação de alta durabilidade com brilho espelhado.", 
    img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Cutilagem", 
    desc: "Cuidado clássico e preciso para unhas impecáveis e saudáveis.", 
    img: "https://images.unsplash.com/photo-1690749138086-7422f71dc159?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Tintura", 
    desc: "Coloração de alta performance para tons vibrantes e cobertura perfeita.", 
    img: "https://images.unsplash.com/photo-1617391654484-2894196c2cc9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Spa nos pés", 
    desc: "Ritual de relaxamento com esfoliação e hidratação profunda.", 
    img: "https://images.unsplash.com/photo-1519419451778-14599a49ec41?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
    name: "Sobrancelha", 
    desc: "Design estratégico que harmoniza e realça a expressão do seu olhar.", 
    img: "https://images.unsplash.com/photo-1718720410628-6aa1b860ea78?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
];

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="services">
      <div className="services-header">
        <div className="services-title-wrapper">
          <span className="services-overline">Nossas Especialidades</span>
          <h2 className="services-title">
            Com profissionalismo atendemos cada detalhe da sua <span>Beleza</span>
          </h2>
          <p className="services-description">
            Uma curadoria completa de procedimentos estéticos para quem não abre mão do cuidado excepcional e resultados transformadores.
          </p>
        </div>

        <div className="services-nav">
          <button className="nav-btn" onClick={() => scroll('left')} aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="nav-btn" onClick={() => scroll('right')} aria-label="Próximo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div className="services-slider" ref={scrollRef}>
        {services.map((service, index) => (
          <div key={index} className="service-card-premium">
            <div className="card-image-container">
              <Image 
                src={service.img} 
                alt={service.name} 
                fill 
                sizes="(max-width: 768px) 100vw, 350px"
                style={{ objectFit: 'cover' }} 
                priority={index < 3}
              />
              <div className="card-overlay" />
            </div>
            <div className="card-content">
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}