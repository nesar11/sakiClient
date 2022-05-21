import { Badge, Input } from '@material-ui/core';
import { Search,  ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
height: 70px;


`;
const Wrapper = styled.div`
padding: 5px 5px;
display: flex;
justify-content: space-between;
`;
const Left = styled.div`
flex:1
`;
const Language = styled.div`

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: right;
  justify-content: right;
  margin-top:10px;;
  margin-left: 0px;
  padding: 7px;
`;

const Logo = styled.h1`
font-weight: bold;
width: 230px;
height: 55px;
margin-top:00px;
margin-right: 5px;

`;
const Center = styled.div`
flex:1;
`;
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
margin-top:-30px;
`;
const MenuItem = styled.div`
font-size: 20px;
cursor: pointer;
margin-left: 10px;
margin-right: 20px;;

`;

//21.11 minutes youtube

function Navbar() {
  return (
    <Container>
      <Wrapper>
          <Left> 
              <Logo><img src='logo512.png' width="170" height="55"></img></Logo>
          <Language> EN</Language>   
           
          </Left> 
          <Center> 
        <SearchContainer>
       
            <Search  style={{ color: "gray", fontSize: 30}}/>

        <Input style={{ color: "gray", fontSize: 18, width: 650 }} />
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
