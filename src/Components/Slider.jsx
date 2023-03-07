import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {sliderItems } from "../Data";
import { mobile } from "../Responsive";


const Container=styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display:'none'})};
`
const Arrow=styled.div`
    height: 50px;
    width: 50px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction==='left'&& '10px'};
    right: ${props=> props.direction==='right'&& '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 70%;
    z-index: 2;
`
const Warper=styled.div`
    display: flex;
    transform: translateX(${(props)=>props.slideIndex*-100}vw);
    transition: all 1.5s ease; 
`
const Slide=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`
const ImgContainer=styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content:center;

`
const Image=styled.img`
    height: 80%;
`
const InfoContainer=styled.div`
    flex: 1;
    padding: 50px;
`
const Title=styled.h1`
    font-weight: 900;
    margin-bottom: 1rem;
    font-size: 50px;
`
const Desc=styled.p`
    width: 90%;
    font-size: 18px;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 1rem;
`
const Button=styled.button`
    color: black;
    font-weight: 700;
    font-size: 16px;
    border: 1px solid;
    background: white;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const handelClick=(value)=>{
        if (value === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else 
        {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
  return (
    <Container>
        <Arrow direction='left' onClick={()=>handelClick('left')}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Warper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.background} key={item.id}>
            <ImgContainer>
              <Image src={item.src} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.Title}</Title>
              <Desc>{item.Description}</Desc>
              <Link to='/shopping'>
                 <Button>SHOW NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}

        </Warper>
        <Arrow direction='right' onClick={()=>handelClick('right')}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider