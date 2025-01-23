import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import HeroSection from "./components/HeroComponent";
import ServicesComponent from "./components/ServicesComponent";
import SkillsComponent from "./components/ProjectsComponent";

export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <HeroSection />
      <ServicesComponent />
      <SkillsComponent />
      <FooterComponent />
    </main>
  );
}
