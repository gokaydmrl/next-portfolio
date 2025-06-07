"use client";

import { useEffect, useState } from "react";
import "./intro.css";
import { usePage } from "../../PageContext";

const words = ["frontend", "backend", "fullstack"];

function Blink() {
  const { isFirstHomeAnimDone, setIsFirstHomeAnimDone, introAnimDone } =
    usePage();
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (introAnimDone) {
      setText("fullstack");
      return;
    }

    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (wordIndex > 2) {
      setText("fullstack");
      return;
    }
    if (!deleting && text.length < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, 80);
    } else if (!deleting && text.length === currentWord.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 300);
    } else if (deleting && text.length > 0) {
      if (currentWord === "fullstack") {
        setIsFirstHomeAnimDone(true);
        return;
      }
      // Deleting
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, 80);
    } else if (deleting && text.length === 0) {
      // Move to next word
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((prev) => prev + 1);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    deleting,
    wordIndex,
    isFirstHomeAnimDone,
    setIsFirstHomeAnimDone,
    introAnimDone,
  ]);

  return (
    <div className="typewriter">
      <p className="name">
        <span>{text}</span>
        {!isFirstHomeAnimDone && <span className="cursor" />}{" "}
      </p>
      <p className="name">developer</p>
    </div>
  );
}

export default Blink;
