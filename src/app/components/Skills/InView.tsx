import { InView } from "react-intersection-observer";
import "../test.css";
function InViewComp() {
  return (
    <InView>
      {({ inView, ref }) => (
        <div
          style={{
            height: "100px",
          }}
          ref={ref}
          className={`${inView ? " slide-in-bck-left" : "none"}  `}
        >
          <p>{`Header inside viewport ${inView}.`}</p>
        </div>
      )}
    </InView>
  );
}
export default InViewComp;
