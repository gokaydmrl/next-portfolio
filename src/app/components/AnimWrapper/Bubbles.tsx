"use client"

import { useEffect, useState } from "react";
import "./animWrapper.css";

const swayTypes = ["sway-left-to-right", "sway-right-to-left"];

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const generateBubbles = (count = 50) => {
  return Array.from({ length: count }).map(() => {
    const left = getRandom(0, 100);
    const radius = getRandom(1, 10);
    const floatDuration = getRandom(6, 12);
    const swayDuration = getRandom(4, 6);
    const floatDelay = getRandom(0, 4);
    const swayDelay = getRandom(0, 4);
    const swayType = swayTypes[Math.floor(Math.random() * 101) < 50 ? 0 : 1];

    return {
      left,
      radius,
      floatDuration,
      floatDelay,
      swayDuration,
      swayDelay,
      swayType,
    };
  });
};

export default function Bubbles() {
  const [bubbles, setBubbles] = useState([
    {
      floatDelay: 1.4494657753871483,
      floatDuration: 9.196340939702488,
      left: 72.30853588458996,
      radius: 7.431188161386482,
      swayDelay: 1.8272938433522738,
      swayDuration: 5.688294148614433,
      swayType: "sway-left-to-left",
    },
    {
      floatDelay: 3.9957270040821102,
      floatDuration: 7.366045660972982,
      left: 40.92056574177768,
      radius: 1.5633531760717152,
      swayDelay: 1.241769441019644,
      swayDuration: 4.290831103422702,
      swayType: "sway-left-to-right",
    },
  ]);

  useEffect(() => {
    const data = generateBubbles(100);
    setBubbles(data);
    return () => {
      setBubbles([]);
    };
  }, []); // ✅ only once

  return (
    <div className="bubbles">
      {bubbles.map((b, index) => (
        <div
          key={index}
          className="bubble"
          style={{
            left: `${b.left}vw`,
            width: `${b.radius * 2}vw`,
            height: `${b.radius * 2}vw`,
            animationDuration: `${b.floatDuration * 5}s`,
            animationDelay: `1s`,
            animationName: "float-up",
            animationIterationCount: "infinite",
          }}
        >
          <div
            className="bubble-inner"
            style={{
              animationName: `${b.swayType}`,
              animationDuration: `${b.swayDuration}s`,
              animationDelay: `${b.swayDelay}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
