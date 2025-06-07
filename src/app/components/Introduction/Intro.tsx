"use client";

import "./intro.css";
import IntroTexts from "./IntroTexts";
import MyImage from "./Image";
import { useProgressiveText } from "../../hooks/useSliceHook";

export function Intro() {
  const text = `Full Stack Developer with 3+ years of experience building scalable apps. Strong in Node.js, React, Vue and
real-time applications. Passionate about solving backend performance problems and crafting smooth
frontend UX/UI.`;
  const pRef = useProgressiveText(text, 60);

  return (
    <div className="introWrapper">
      <div className="intro">
        <IntroTexts />
        <MyImage />
      </div>
      <div>
        <p
          ref={pRef}
          style={{ fontSize: "18px", fontFamily: "Segoe Script, sans-serif" }}
        />
      </div>
    </div>
  );
}
export default Intro;
