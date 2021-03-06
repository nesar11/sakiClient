import { Link } from "react-router-dom";
import  styled  from "styled-components"

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
color:white;
margin-bottom: 20px;
`;
const Button = styled.button`
font-size: 17px;
    border:none;
    padding: 10px;
    background-color: white;
    color:white;
    cursor: pointer;
    font-weight: 600;
    background-color:#781C68 ;
    transition: all 0.5s ease;
  &:hover {
    background-color: #f008c9;
    transform: scale(1.1);
  }
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
       <Image src={item.img} />
       <Info>
           <Title>
               {item.title}
           </Title>
       <Button>Shop Now</Button>
       </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem