import { InView } from "react-intersection-observer";
import "../../test.css";
import Image, { StaticImageData } from "next/image";
function ImageLeft({
  src,
  text,
  isLeft,
}: {
  src: string | StaticImageData;
  text: string;
  isLeft: boolean;
}) {
  return (
    <InView triggerOnce={true} delay={300}>
      {({ inView, ref }) =>
        isLeft ? (
          <div
            ref={ref}
            className={`imageLeft ${inView ? "slide-in-bck-left" : "none"}`}
          >
            <div className="flex30 imageWrapper big">
              <Image
                alt=""
                className=" big"
                src={src}
                style={{ width: "100%" }}
              />
            </div>
            <p className="flex70 skillText">{text}</p>
          </div>
        ) : (
          <div
            ref={ref}
            className={`imageLeft ${inView ? "slide-in-bck-right" : "none"}`}
          >
            <p className="flex70 skillText">{text}</p>
            <div className="flex30 imageWrapper big">
              <Image
                className=" big"
                src={src}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        )
      }
    </InView>
  );
}
export default ImageLeft;
