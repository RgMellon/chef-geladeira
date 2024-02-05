import { useContext } from "react";
import { WelcomeContext } from "../contexts/WelcomeContext";

export function useWelcome() {
  const context = useContext(WelcomeContext);

  return context;
}
