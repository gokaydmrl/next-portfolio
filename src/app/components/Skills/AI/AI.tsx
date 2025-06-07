import ImageLeft from "../Components/ImageLeft";
import { aiDetails } from "../consts/details";

function AI() {
  return (
    <div
      style={{
        letterSpacing: "1.5px",
        display: "grid",
        gap: "36px",
      }}
    >
      {aiDetails.map((item, index) => (
        <ImageLeft
          isLeft={item.isLeft}
          src={item.src}
          text={item.text}
          key={index}
        />
      ))}
    </div>
  );
}
export default AI;
