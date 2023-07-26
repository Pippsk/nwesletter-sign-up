import { createGlobalStyle } from "styled-components";


 const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:'Roboto', sans-serif;
    }

    body{
        background-color:hsl(234, 29%, 20%) ;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family:'Roboto', sans-serif;
    }
`

export default GlobalStyle