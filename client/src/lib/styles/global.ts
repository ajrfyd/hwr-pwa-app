import { createGlobalStyle } from 'styled-components';
import 'nes.css/css/nes.min.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --brown: #DFBB9D;
    --beige: #F7E2D6;
    --teal: #9DD6DF;
    --purple: #676aec;
    --white: #f2f2f2;
    --red: #f44336;
    --blue: #2196f3;
    --green: #4caf50;
    --grey: #f0efef;
    --black: #000;
  }

  @font-face {
    font-family: "DungGeunMo";
    src: url("/assets/fonts/DungGeunMo.woff2") format("woff2"),
    url("/assets/fonts/DungGeunMo.woff") format("woff"),
    url("/assets/fonts/DungGeunMo.ttf") format("truetype");
    font-display: swap;
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    font-family: "DungGeunMo" "Press Start 2P", monospace;
    /* font-weight: bold; */
  }

  .nes-container, .nes-btn, .nes-input {
    font-family: 'DungGeunMo', 'Press Start 2P', monospace !important;
  }

  *,
  *::after,
  *::after {
    box-sizing: border-box;
    font-family: "DungGeunMo", 'Press Start 2P', monospace !important;
  }

  html {
    /* background-color: var(--beige); */
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-color: var(--beige); */
  }

  a {
    text-decoration: none;
  }

  ul {
    margin-bottom: 0;
  }

  li {
    list-style: none;
  }

  code {
    font-family: "Fira Mono", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  input, button, textarea {
    font-family: inherit;
  }

  html, border-style, #root {
    height: 100%;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
  }
`;

export default GlobalStyles;
