import Image from "next/image";
import gd from "../../assets/gd.png";
function MyImage() {
  return (
    <div className="imgWrapper">
      <div className="mobilMyImg">
        <Image
          alt="image"
          src={gd}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "340px 256px 400px 180px",
          }}
        />
      </div>
    </div>
  );
}
export default MyImage;
