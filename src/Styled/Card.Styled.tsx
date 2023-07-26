import styled from 'styled-components'

export const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 15px;
    padding: 2rem;
    width: 400px;

    *{
        margin-bottom:20px;
    }

    button{
        width: 100%;
        padding: 10px 0;
        border: none;
        border-radius: 5px;
        background-color: hsl(235, 18%, 26%);
        color: hsl(0, 0%, 100%);
        cursor: pointer;

        &:hover{
            background-color: hsl(4, 100%, 67%);
        }
    }

    @media (max-width:400px) {
    button{
        margin-top: 300px;
    }
}
    
`