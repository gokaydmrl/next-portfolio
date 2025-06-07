import "./about.css";
import { titleAndTexts } from "./titleAndTexts";
import TitleAndText from "./TitleAndText";
function About() {
  return (
    <div style={{ display: "grid", gap: "32px" }}>
      {titleAndTexts.map((item) => {
        return (
          <TitleAndText
            key={item.title}
            icon={item.icon}
            text={item.text}
            title={item.title}
          />
        );
      })}
    </div>
  );
}
export default About;
