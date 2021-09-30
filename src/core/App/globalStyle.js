import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    transition: background 0.3s;
    font-size: 18px;
    letter-spacing: 0.05em;
    word-wrap: break-word;
    padding-bottom: 108px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;