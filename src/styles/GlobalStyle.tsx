import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    list-style: none;
  }

  p {
    margin: 10px 0;
  }
`;
