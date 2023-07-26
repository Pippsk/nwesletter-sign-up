import styled from 'styled-components'

 export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    max-width:900px;
    background-color: #fff;
    border-radius:.5rem;
    overflow: hidden;
    

@media (min-width:400px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 1rem;
}
`

