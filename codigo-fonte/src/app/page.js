import AppointmentAction from "@/components/AppointmentAction";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutSalon from "@/components/AboutSalon";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "100px" }}>
        <Hero />
        <Services />
        <AppointmentAction />
        <AboutSalon />
        <LocationSection />
        <Footer />
      </main>
    </>
  );
}