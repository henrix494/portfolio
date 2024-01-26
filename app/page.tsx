import Hero from "../components/Hero/Hero";
import NavBar from "@/components/Navbar/NavBar";
import AboutMe from "@/components/AboutMe/AboutMe";

import Scroll from "@/components/Projects/MainPro";
export default function Home() {
  return (
    <main className="">
      <div className=" h-screen bg-red">
        <NavBar />

        <Hero />
      </div>
      <AboutMe />

      <Scroll />
    </main>
  );
}
