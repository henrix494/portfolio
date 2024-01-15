import Hero from "../components/Hero/Hero";
import NavBar from "@/components/Navbar/NavBar";
import AboutMe from "@/components/AboutMe/AboutMe";
export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Hero />
      <AboutMe />
      <div className=" h-[800px] bg-white"></div>
    </main>
  );
}
