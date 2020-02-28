import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
    ${reset};
    body {
        font-family: 'Nanum Gothic';
    }
    a {
        text-decoration: none;
        font-family: 'Nanum Gothic';
        cursor: pointer;
    }
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
