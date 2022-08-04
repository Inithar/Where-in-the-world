import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
    inputTextColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: '#FFFFFF',
  backgroundColor: '#FAFAFA',
  textColor: '#111517',
  inputTextColor: '#848484',
};

export const darkTheme: DefaultTheme = {
  primaryColor: '#2B3844',
  backgroundColor: '#202C36',
  textColor: '#FFFFFF',
  inputTextColor: '#FFFFFF',
};
