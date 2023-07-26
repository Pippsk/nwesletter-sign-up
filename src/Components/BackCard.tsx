import React from 'react'
import { CardContainer } from '../Styled/Card.Styled'

type CardProps = {
    email:string
    handleClick: () => void
}

const BackCard = ({email, handleClick}:CardProps) => {
  return (
    <CardContainer>
        <img src="/images/icon-success.svg" alt="" />
        <h1>Thanks for subscribing</h1>
        <p>A confirmation email has been sent to <b>{email}</b> please open it and click the button inside to confirm your subscription.</p>

        <button onClick={handleClick}>Dismiss Message</button>
      
    </CardContainer>
  )
}

export default BackCard
