import { Link } from "react-router-dom";
import styled from "styled-components";
const Container=styled.div`
    flex: 1;
    height: 70vh;
    margin: 10px;
    position: relative;
`
const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info=styled.div`
    width: 100%;
    height: 100%;
    position:absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
`
const Title=styled.h1`
    color: white;
    margin-bottom: .5rem;
`
const Button=styled.button`
    color: black;
    font-weight: 600;
    font-size: 16px;
    
    background: white;
    padding: 0.7rem 0.55rem;
    cursor: pointer;
`
export const CategoriesItem = ({item}) => {
  return (
    <Container>
        <Image src={item.source}/>
        <Info>
            
        </Info>
        <Info>
            <Title>
                {item.title}
            </Title>
            <Link to='/shopping'>
                <Button>SHOP NOW</Button>
            </Link>
        </Info>
    </Container>
  )
}
