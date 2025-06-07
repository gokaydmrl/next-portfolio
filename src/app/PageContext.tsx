"use client"
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
// Define allowed page names
type Page = "intro" | "skills" | "contact" | "about";

// Define the shape of context
interface PageContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isFirstHomeAnimDone: boolean;
  setIsFirstHomeAnimDone: (isIt: boolean) => void;
  introAnimDone: boolean;
  setIntroAnimDone: (isIt: boolean) => void;
}

// Create the context
const PageContext = createContext<PageContextType | undefined>(undefined);

// Provider component with typing for children
export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>("intro");
  const [isFirstHomeAnimDone, setIsFirstHomeAnimDone] =
    useState<boolean>(false);
  const [introAnimDone, setIntroAnimDone] = useState(false);
  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        isFirstHomeAnimDone,
        setIsFirstHomeAnimDone,
        introAnimDone,
        setIntroAnimDone,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

// Custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
export const usePage = (): PageContextType => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};
