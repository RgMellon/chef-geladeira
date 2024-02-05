import { ReactNode, createContext, useState } from "react";

type WelcomeContextProviderProps = {
  children: ReactNode;
};

type WelcomeContextDataProps = {
  show: boolean;
  handleShowWelcomeScreen: () => void;
};

export const WelcomeContext = createContext<WelcomeContextDataProps>(
  {} as WelcomeContextDataProps
);

export function WelcomeProvider({ children }: WelcomeContextProviderProps) {
  const [show, setShow] = useState(true);

  async function handleShowWelcomeScreen() {
    setShow((old) => !old);
  }

  return (
    <WelcomeContext.Provider
      value={{
        show,
        handleShowWelcomeScreen,
      }}
    >
      {children}
    </WelcomeContext.Provider>
  );
}
