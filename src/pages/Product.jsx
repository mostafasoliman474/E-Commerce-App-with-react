import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import { Announcement } from '../Components/Announcement';

import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';

import { NewsLetter } from '../Components/NewsLetter';
import img from '../Images/pexels-cottonbro-studio-9488406.jpg';
import { mobile } from '../Responsive';
const Container=styled.div``

const Wrapper=styled.div`
  display: flex;
  padding: 50px;
  ${mobile({flexDirection:'column',padding:'20px'})}
`
const ImageContainer=styled.div`
  flex: 1;
  
` 
const Image=styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  border-radius: 5px;
  ${mobile({height:'50vh'})}
`
const InfoContainer=styled.div`
  flex: 1;
  margin: 0 50px;
  ${mobile({margin:'0 10px'})}
`
const Title=styled.h1`
  font-weight: 100;
  letter-spacing: 1px;
`
const Desc=styled.p`
  font-weight:200;
  margin: 30px 0;
  letter-spacing: .5px;
`
const Price=styled.div`
  font-size: 40px;
`
const FilterContainer=styled.div`
  margin: 50px 0 20px 0;
  display: flex;
  justify-content: space-between;
  width: 50%;
  ${mobile({width:'100%'})}
  
`
const Filter=styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`

const FilterTitle=styled.p`
  margin-right: 10px;
`
const FilterColor=styled.span`
  padding: .7rem;
  border-radius: 50%;
  background: ${props=>props.color};
  margin-left: 10px;
  cursor: pointer;
`
const FilterSize=styled.select`
  padding:.3rem .5rem;
  border:2px solid lightgray;
  outline:none;
  border-radius: 1px;
  font-weight: 300;
  font-size: 16px;
`
const Size=styled.option`

`
const AmountContainer=styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  ${mobile({width:'100%'})}
`

const Amount=styled.div`
  padding: 10px 15px;
  margin: 0 10px;
  border:1px solid teal ;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
`

const AddAmount=styled.div`
  display: flex;
  align-items: center;
`
const Button=styled.button`
  padding: 18px 10px;
  border-radius: 3px;
  border:1px solid teal;
  font-weight: 500;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover{
    background: white;
    color:teal;
  }
`



const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
          <ImageContainer>
            <Image src={img} />
          </ImageContainer>
          <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.</Desc>
            <Price>$ 50</Price>
            <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black'></FilterColor>
              <FilterColor color='gray'></FilterColor>
              <FilterColor color='blue'></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <Size>XS</Size>
                <Size>L</Size>
                <Size>M</Size>
                <Size>XL</Size>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AmountContainer>
            <AddAmount>
              <Remove fontSize='medium'/>
              <Amount>1</Amount>
              <Add fontSize='medium'/>
            </AddAmount>
            
            <Button>ADD TO CART</Button>
          </AmountContainer>
          </InfoContainer>
          
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}
export default Product;