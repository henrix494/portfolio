"use client";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Contact from "../Contact/Contact";
import useIsomorphicLayoutEffect from "./isomorphicLayout";
import Projects from "./Projects";
import { MobilePro } from "./MobilePro";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Scroll = () => {
  const horizontalSection = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".horizontal-panel");
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 2),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSection.current,
          pin: true,
          start: "top top",
          end: "+=200%",
          scrub: 2,
        },
      });
    }, horizontalSection);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        className="horizontal-section max-lg:hidden"
        ref={horizontalSection}
      >
        <div
          className="horizontal-panel bg-white overflow-hidden max-xl:hidden"
          style={{ height: "100vh", maxHeight: "100vh" }}
        >
          <Projects />
        </div>

        <div className="horizontal-panel">
          <Contact />
        </div>
      </section>

      <section className=" lg:hidden">
        <MobilePro />

        <Contact />
      </section>
    </>
  );
};

export default Scroll;
