import "./animWrapper.css";
import Bubbles from "./Bubbles";
function AnimWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="asd" style={{ width: "100%", height: "100%" }}>
        <Bubbles />
        {children}
        <div style={{ position: "absolute" }}></div>
      </div>
    </>
  );
}
export default AnimWrapper;
