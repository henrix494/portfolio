import Hero from "../components/Hero/Hero";
import NavBar from "@/components/Navbar/NavBar";
import AboutMe from "@/components/AboutMe/AboutMe";
import Projects from "@/components/Projects/Projects";
import { MobilePro } from "@/components/Projects/MobilePro";
export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <MobilePro />
    </main>
  );
}
