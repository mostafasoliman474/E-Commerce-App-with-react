
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container=styled.div`
    flex: 1;
    min-width: 280px;
    flex-wrap: wrap;
    height: 400px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e7ebfa;
    margin: 10px;
    border-radius: 10px;
   
    
`
const Image=styled.img`
   
    width: auto;
    z-index: 2;
    height: ${props=>props.type==='dress'&&'95%'};
   
    height: ${props=>props.type==='short-dress'&&'80%'};
  
    height: ${props=>props.type==='pantalon'&&'80%'};
   
    height: ${props=>props.type==='bag'&&'60%'};
    
    height: ${props=>props.type==='t-shirt'&&'70%'};
    
    height: ${props=>props.type==='cap'&&'30%'};
    
    height: ${props=>props.type==='light-jacket'&&'70%'};
   
`
const Info=styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 3;
    background-color: rgba(0,0,0,0);
    opacity: 0;
    transition: .5s ease-out;
    &:hover{
        background-color: rgba(0,0,0,.5);
        opacity: 1;
        border-radius: 10px;
    }
`
const Circule=styled.div`
width: 70%;
height: 60%;
border-radius: 50%;
z-index: 0;
position :absolute ;
background-color:white ;
`
const Icon=styled.div`
padding: .7rem;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
&:hover{
    background-color: #eff7ff;
    transform: scale(1.1);
}
    
`
export const Product = ({item}) => {
  return (
    <Container>
        <Circule></Circule>
        <Image src={item.src} key={item.id} type={item.type}/>
        <Info>
            <Link to='/product'>
                <Icon>
                    <SearchOutlined/>
                </Icon>
            </Link>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>

    </Container>
  )
}
