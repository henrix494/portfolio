import "./fogStyle.css";
export default function Fog() {
  return (
    <>
      <div id="foglayer_01" className="fog h-screen fixed bg-black">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div id="foglayer_02" className="fog h-screen bg-black">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div id="foglayer_03" className="fog h-screen bg-black">
        <div className="image01"></div>
      </div>
    </>
  );
}
