import Hero from "../components/Hero/Hero";
import NavBar from "@/components/Navbar/NavBar";
import AboutMe from "@/components/AboutMe/AboutMe";
import { sql } from "@vercel/postgres";
import Scroll from "@/components/Projects/MainPro";

const Home = async () => {
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
};

export default Home;
