// import Test from "../../Test";
import ImageLeft from "../Components/ImageLeft";
import { details } from "../consts/details";
function Frontend() {
  return (
    <div
      style={{
        display: "grid",
        gap: "36px",
      }}
    >
      {details.map((item, index) => (
        <ImageLeft
          src={item.src}
          key={index}
          isLeft={item.isLeft}
          text={item.text}
        />
      ))}
    </div>
  );
}
export default Frontend;
