"use client";

import Intro from "../components/Introduction/Intro";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import { usePage } from "../PageContext";
import Contact from "../components/Contact/Contact";
export function useComponentToRender() {
  const { currentPage } = usePage();
  const components = {
    intro: { component: Intro },
    skills: { component: Skills },
    about: { component: About },
    contact: { component: Contact },
  };
  const componentToRender = components[currentPage].component;
  return componentToRender;
}
