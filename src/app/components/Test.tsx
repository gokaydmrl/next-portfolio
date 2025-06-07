import "./test.css";
import { useInView } from "react-intersection-observer";
function Test() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
    triggerOnce: true,
    rootMargin: "10px",
  });

  return (
    <div ref={ref} className={`box ${inView ? "test" : "none"}`}>
      <p> Hello! I am {inView ? "visible" : "hidden"}</p>
    </div>
  );
}
export default Test;
