import {  Send } from '@material-ui/icons';
import styled from "styled-components";

const Container = styled.div`
height: 60vh;
background-color: #efefef;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;

`;
const InputContainer = styled.div`
  width: 35%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  align-items: center;
`;
const Input = styled.input`
border: none;
flex: 8;


`;
const Button = styled.div`
flex: 2;
  border: none;
  background-color: teal;
  color: white;
  padding: 5px;
`;


const Newsletter = () => {
  return (
    <Container>
        <Title> Newsletter</Title>
        <Desc> Get timely updates from your favorite products</Desc>
        <InputContainer>
        <Input placeholder='Your email' />
        <Button>
            <Send />
        </Button>
        </InputContainer>
      
    </Container>
  )
}

export default Newsletter
