import { createGlobalStyle } from 'styled-components';

interface DefaultTheme {
  textTitle: string;
  textPrimary: string;
  disabled: string;
  placeholderColor: string;
  borderColor: string;
  bgColor: string;
  success: string;
  error: string;
  errorBg: string;
  redHover: string;
  icon: string;
}

const globalStyles = {
  display: 'block',
  margin: '0',
  padding: '0',
  width: '100%',
  heigth: '100%',
  fontFamily: 'Open-Sans, Helvetica, Sans-Serif'
};

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textPrimary};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    ${globalStyles}
  }
`;

export const darkTheme = {
  textTitle: '#b6b6b6',
  textPrimary: '#fff',
  disabled: '#8C8CB1',
  placeholderColor: '#C8C8D3',
  borderColor: '#EFEFF5',
  bgColor: 'black',
  success: '#79E29E',
  error: '#F1564F',
  errorBg: '#ffd9d9',
  redHover: '#ee3830',
  icon: '#b6b6b6'
};

export const lighTheme = {
  textTitle: '#1c1c1c',
  textPrimary: '#121212',
  disabled: '#8C8CB1',
  placeholderColor: '#C8C8D3',
  borderColor: '#EFEFF5',
  bgColor: '#fffff',
  success: '#79E29E',
  error: '#F1564F',
  errorBg: '#ffd9d9',
  redHover: '#ee3830',
  icon: "#333",
}
