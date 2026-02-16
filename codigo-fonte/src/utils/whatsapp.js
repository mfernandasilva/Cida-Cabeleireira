export const handleWhatsappClick = (mensagem) => {
  const TELEFONE = "5581986848017"; 
  const url = `https://wa.me/${TELEFONE}?text=${encodeURIComponent(mensagem)}`;
  
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};