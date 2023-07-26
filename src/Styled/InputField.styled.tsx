import styled from 'styled-components'



export const InputField = styled.input<{isValid:boolean}>`
     margin-bottom: 15px;
            background-color: ${({isValid}) => !isValid ? "white" : "hsl(4, 100%, 67%)" };
            padding: 15px;
            border:1px solid hsla(231.42857142857136, 6.862745098039219%, 60%, 0.638);
            border-radius: 10px;
            font-weight:500;
            font-size: 1rem;
            outline: none;

            ::placeholder{
                color: hsl(231, 7%, 60%);
            }
`