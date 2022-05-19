import styled from "styled-components";


const Container = styled.div`
    height: 30px;
    background-color: #781C68;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

function Announcement() {
  return (
    <Container>
      Supper deal! Free shipping on Orders over $40
    </Container>
  )
}

export default Announcement
