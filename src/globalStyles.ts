import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, *::after, *::before{
        box-sizing: inherit;
    }

    body{
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Josefin Sans', sans-serif;
        color: #1A1C1A;
        background-color: #F3DFC1;
    }

    a{
        color: #1A1C1A;
        text-decoration: none;
    }

    button{
        background-color: inherit;
        border: none;
        outline: none;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6{
        margin: 0;
        font-weight: normal;
        font-size: 1rem;
    }

    #root{
        height: 100%;
    }

    ul{ 
        padding: 0;
        margin: 0;
    }


    ::-webkit-scrollbar{
        width: 0;
        background-color: transparent;
    }

`;
