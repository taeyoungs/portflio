import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'NanumGothic';
        src: url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Anton&display=swap.eot');
        src: url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Anton&display=swap.eot?#iefix') format('embedded-opentype');
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
        color: black;
    }
`;

export default GlobalStyle;
