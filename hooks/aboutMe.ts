import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Refs = {
  container: React.MutableRefObject<null>;
  myName: React.MutableRefObject<null>;
  webdev: React.MutableRefObject<null>;
  webapp: React.MutableRefObject<null>;
  givesSol: React.MutableRefObject<null>;

  [key: string]: React.MutableRefObject<null>;
};

export const useAnimation = () => {
  const refs: Refs = {
    container: useRef(null),
    myName: useRef(null),
    webdev: useRef(null),
    webapp: useRef(null),
    givesSol: useRef(null),
  };

  useGSAP(
    () => {
      Object.entries(refs).forEach(([key, ref]) => {
        gsap.to(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            toggleActions: "play reset resume reset",
          },
          opacity: 1,
          duration: 3,
        });
      });
    },
    { scope: refs.container }
  );

  return refs;
};
