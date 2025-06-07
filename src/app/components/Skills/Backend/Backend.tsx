import ImageLeft from "../Components/ImageLeft";
import { backendDetails } from "../consts/details";

function Backend() {
  return (
    <div
      style={{
        letterSpacing: "1.5px",
        display: "grid",
        gap: "36px",
      }}
    >
      {backendDetails.map((item, index) => (
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
export default Backend;
