import { Dispatch } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';

interface IMainTemplateProps {
  currentTheme: string;
  setCurrentTheme: Dispatch<React.SetStateAction<string>>;
}

export const MainTemplate = ({ currentTheme, setCurrentTheme }: IMainTemplateProps) => (
  <>
    <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
    <Outlet />
  </>
);
