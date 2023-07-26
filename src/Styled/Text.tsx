import styled from 'styled-components'



export const TextContainer = styled.div`
    padding: 2rem 1.5rem;
    background-color: #fff;
    h1{
        margin-bottom: 20px;
    }
    div{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
    }

    section{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        
        label{
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;

            span{
                color: hsl(4, 100%, 67%);
            }
        }


        button{
            background-color:hsl(234, 29%, 20%);
            color: #fff;
            font-family:'Roboto', sans-serif;
            padding : 20px 30px;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
        }
    }
`