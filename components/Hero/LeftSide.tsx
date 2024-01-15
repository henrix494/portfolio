import "./scrollDown.css";
import Marquee from "react-fast-marquee";

export default function LeftSide() {
  return (
    <div className="absolute top-10 left-10 w-[200px] text-white">
      <Marquee
        speed={30}
        gradient={true}
        gradientColor={"black"}
        gradientWidth={25}
        direction="left"
        delay={0}
      >
        <div className="flex gap-10">
          <p className=" font-mono">נתן מינקוב</p>
        </div>
      </Marquee>
    </div>
  );
}
