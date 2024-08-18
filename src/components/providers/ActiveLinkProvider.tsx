"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ActiveLinkContext = {
  activeLinkId: string;
  setActiveLinkId: Dispatch<SetStateAction<string>>;
};

const ActiveLinkContext = createContext<ActiveLinkContext | undefined>(
  undefined
);

const ActiveLinkProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeLinkId, setActiveLinkId] = useState("hero");

  return (
    <ActiveLinkContext.Provider value={{ activeLinkId, setActiveLinkId }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

const useActiveLinkContext = () => {
  const context = useContext(ActiveLinkContext);

  if (!context) {
    throw new Error("Active link context is undefined");
  }

  return context;
};

export { useActiveLinkContext, ActiveLinkProvider };
