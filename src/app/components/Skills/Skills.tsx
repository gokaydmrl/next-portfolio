"use client";

import "./skills.css";
import { useState } from "react";
import { skills, type TComponent } from "./consts/skills";
import Expand from "./Expand/Expand";
function Skills() {
  const [component, setComponent] = useState<TComponent>("AI");
  return (
    <div>
      <div className="skillsWrapper ">
        <p className="header">
          My
          <span
            className="fadeIn heartbeat"
            style={{
              letterSpacing: "2px",
              paddingLeft: "8px",
              paddingRight: "8px",
              textDecoration: "underline",
            }}
          >
            {component}
          </span>
          Skills
        </p>
      </div>
      <div className="buttonsWrapper">
        {skills.map((item) => {
          return (
            <button
              key={item.component}
              className={component === item.component ? "active" : "passive"}
              onClick={() => setComponent(item.component)}
            >
              {item.component}
            </button>
          );
        })}
      </div>
      <Expand component={component} />
    </div>
  );
}
export default Skills;
