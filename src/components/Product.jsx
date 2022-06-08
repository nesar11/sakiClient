
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Info = styled.div`
width: 100%;
height: 100px;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-content: center;
justify-content: center;


`;
const Container = styled.div`
  flex: 1;
  margin: 20px;
  min-width: 280px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
  box-shadow: 1px 1px 15px grey;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f5fbfd;
    transform: scale(1.08);
  }
`;
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;
const Image = styled.img`
height: 65%;
z-index: 2;

`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  background-color: #781C68;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f008c9;
    transform: scale(1.1);
  }
`;

const Product = ({item}) => {
  return (
     <Link to={`/product/${item._id}`}> 
    <Container>
      
      <Circle />
      <Image src={item.img} />
      <Info>
         <Icon>
             <ShoppingCartOutlined />
         </Icon>
         <Icon>
             <SearchOutlined />
         </Icon>
         <Icon>
             <FavoriteBorderOutlined />
         </Icon>
      </Info>
      
    </Container>
    </Link> 
  )
}

export default Product;
