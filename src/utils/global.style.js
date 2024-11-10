import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { color } from "./color.util";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html{
        font-size: 16px;
        box-sizing: border-box;
    }

    *, *:before, *:after{
        box-sizing: inherit;
    }

    body{
        margin: 10px;
        background-color: ${color[300]};
    }
`;