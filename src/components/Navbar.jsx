import { Badge } from '@material-ui/core';
import { Input, Search,  ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
height: 70px;
background-color: #A91079;
`;
const Wrapper = styled.div`
padding: 5px 10px;
display: flex;
justify-content: space-between;
`;
const Left = styled.div`
flex:1
`;
const Language = styled.div`



`;
const SearchContainer = styled.div`
border: 2px solid lightgray;
font-size:14px;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;



const Logo = styled.h1`
font-weight: bold;
`;
const Center = styled.div`
flex:1;
`;
const Right = styled.div`
flex:1;
display: flex;
align-item: center;
justify-content: flex-end;
`;
const MenuItem = styled.div`
font-sze: 14px;
cursor: pointer;
margin-left: 25px;
`;
//21.11 minutes youtube

function Navbar() {
  return (
    <Container>
      <Wrapper>
          <Left> 
              <Logo>Saki</Logo>
          <Language> EN</Language>   
           
          </Left> 
          <Center> 
        <SearchContainer>
           <Search style={{color: "gray", fontSize:20}}/>

        <Input />
        </SearchContainer>      
        </Center> 
          <Right> 
          <MenuItem> Register</MenuItem>
          <MenuItem> Sign in</MenuItem>
          <MenuItem> 
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined color="action" />
          </Badge>
          </MenuItem>
          </Right> 
      </Wrapper>
    </Container>
  )
}

export default Navbar
