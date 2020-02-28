import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Nanum Gothic';
        src: url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
    }
    ${reset};
    body {
        font-family: 'NanumGothic';
    }
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        font-family: 'NanumGothic';
        cursor: pointer;
    }
`;

export default GlobalStyle;
