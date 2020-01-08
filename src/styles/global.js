import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.color1};
        -webkit-font-smoothing: antialiased;
        width: 100%;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
        background: ${props => props.theme.color2};
    }

    button {
        cursor: pointer;
    }
`;
