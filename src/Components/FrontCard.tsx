import { useState, useRef, useEffect } from 'react'
import { TextContainer } from '../Styled/Text'
import { ChangeEvent } from 'react';
import BackCard from './BackCard';
import { Image } from '../Styled/Image';
import { Container } from '../Styled/Container.styled';
import { InputField } from '../Styled/InputField.styled';


export default function TextComponent() {

  const inputRef = useRef<HTMLInputElement>(null!)

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  useEffect(() => {
    inputRef.current.focus()
  }, [])
  

    const isValidEmail =  emailRegex.test(email);
    

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newEmail = event.target.value;
    
      if (!emailRegex.test(newEmail)) {
        setError('Valid email required');
        setShowError(true);
        setEmail(newEmail); // Update the email state only when it's valid
        setIsValid(true)
        return; // Return early when the email is not valid
      }

      
    
      setEmail(newEmail); // Update the email state for a valid email
      setError('');
      setShowError(false);
      setIsValid(false)
      setShowError(false)

      
      
    };

      const handleClick = () =>{
        isValidEmail ? setSuccess(true) : setSuccess(false)
      }

      const back = () => {
        setSuccess(false)
        setEmail("")
      }

  return (
    <>
    {success ? <BackCard email={email} handleClick={back}/> :

    <Container>
    <picture>
  <source media="(min-width:400px)" srcSet='./images/illustration-sign-up-desktop.svg'/>
  <Image src='./images/illustration-sign-up-mobile.svg' />
  </picture> 
    <TextContainer>
      <h1>Stay updated</h1>
      <p>Join 60,000+ product managers receving monthly updates on:</p>
      <div>
        <img src='/images/icon-list.svg' alt="" />
        <p>Product discovery and building what matters</p>
      </div>
      <div>
        <img src='/images/icon-list.svg' alt="" />
        <p>Measuring to ensure updates are  a succes</p>
      </div>
      <div>
        <img src='/images/icon-list.svg' alt="" />
        <p>And much more</p>
      </div>

    <section>
      <label htmlFor="email" >Email adress { showError && <span>{error}</span>}</label>
      <InputField
      type="text" 
      id="email" 
      isValid={isValid}
      placeholder='email@company.com'
      value={email}
      onChange={handleChange}
      ref={inputRef}
      /> 
      <button type='submit' onClick={handleClick}>Subscribe to monthly newsletter</button>
    </section>
    </TextContainer>
    </Container>}
  
    </>
  )
}


