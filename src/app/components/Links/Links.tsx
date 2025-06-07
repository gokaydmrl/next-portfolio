import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import cv from "../../assets/cv.jpg";
//import pdf from "../../assets/pdf/Gökay _DEMİREL_cv.pdf";
import Image from "next/image";
function Links() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        gap: "16px",
        paddingBottom: "64px",
        paddingTop: "32px",
      }}
    >
      <a href="https://www.linkedin.com/in/gokaydmrl/">
        <Image
          src={linkedin}
          alt=""
          style={{ width: "24px", height: "24px" }}
        />
      </a>

      <a href="https://www.github.com/gokaydmrl">
        {" "}
        <Image src={github} alt="" style={{ width: "24px", height: "24px" }} />
      </a>
      {/* <a href={pdf} download={true}>
        <Image src={cv} alt="" style={{ width: "24px", height: "24px" }} />
      </a> */}
    </div>
  );
}
export default Links;
