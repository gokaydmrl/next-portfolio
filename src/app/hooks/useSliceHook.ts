import { useEffect, useRef } from "react";
import { usePage } from "../PageContext";

export function useProgressiveText(
  text: string,
  interval: number = 30
): React.RefObject<HTMLParagraphElement> {
  const indexRef = useRef(0);
  const fullText = useRef(text);
  const domRef = useRef<HTMLParagraphElement>(null!);
  const { isFirstHomeAnimDone, introAnimDone, setIntroAnimDone } = usePage();
  useEffect(() => {
    const el = domRef.current;

    if (introAnimDone && el) {
      el.textContent = text;
      return;
    }
    indexRef.current = 0;
    fullText.current = text;

    if (!el || !isFirstHomeAnimDone) return;

    const timer = setInterval(() => {
      if (indexRef.current >= fullText.current.length) {
        clearInterval(timer);
        setIntroAnimDone(true);
        return;
      }

      el.textContent = fullText.current.slice(0, indexRef.current + 1);
      indexRef.current++;
    }, interval);

    return () => clearInterval(timer);
  }, [text, interval, isFirstHomeAnimDone, introAnimDone, setIntroAnimDone]);
  return domRef;
}
