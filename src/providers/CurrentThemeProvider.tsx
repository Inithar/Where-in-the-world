import React, { ReactNode, useState } from 'react';

interface ContextInterface {
  currentTheme: string;
  handleThemeChange: () => void;
}

interface Props {
  children: ReactNode;
}

export const CurrentTheme = React.createContext<ContextInterface>({ currentTheme: 'lightTheme', handleThemeChange: () => {} });

export const CurrentThemeProvider = ({ children }: Props) => {
  const [currentTheme, setCurrentTheme] = useState('lightTheme');

  const handleThemeChange = () => {
    const newTheme = currentTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
    setCurrentTheme(newTheme);
  };

  return <CurrentTheme.Provider value={{ currentTheme, handleThemeChange }}>{children}</CurrentTheme.Provider>;
};
