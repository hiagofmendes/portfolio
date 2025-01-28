import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import HeroSection from "./components/HeroComponent";
import ServicesComponent from "./components/ServicesComponent";
import SkillsComponent from "./components/ProjectsComponent";
import ButtonWhatsApp from "./components/ButtonWhatsApp";
import ClientsComponnet from "./components/ClientsComponent";
import HrComponent from "./components/HrComponent";

export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <HeroSection />
      <ServicesComponent />
      <SkillsComponent />
      <ClientsComponnet />
      <HrComponent />
      <FooterComponent />
      <ButtonWhatsApp />
    </main>
  );
}
