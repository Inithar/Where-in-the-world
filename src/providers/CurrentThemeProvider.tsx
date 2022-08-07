import React, { ReactNode, useState } from 'react';

interface IContextInterface {
  currentTheme: string;
  handleThemeChange: () => void;
}

interface ICurrentThemeProviderProps {
  children: ReactNode;
}

export const CurrentTheme = React.createContext<IContextInterface>({ currentTheme: 'lightTheme', handleThemeChange: () => {} });

export const CurrentThemeProvider = ({ children }: ICurrentThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState('lightTheme');

  const handleThemeChange = () => {
    const newTheme = currentTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
    setCurrentTheme(newTheme);
  };

  return <CurrentTheme.Provider value={{ currentTheme, handleThemeChange }}>{children}</CurrentTheme.Provider>;
};
