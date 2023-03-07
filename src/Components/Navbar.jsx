import { CloseOutlined, MenuOutlined, Search,ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React, { useState } from 'react'

import styled from 'styled-components'
import { mobile } from '../Responsive';
import { Link } from 'react-router-dom';


const Container=styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`
const Wrapper=styled.div`
   
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 20px;
    ${mobile({padding:'10px 20px'})}
`  

const Left=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({justifyContent:'flex-start'})}
`
const SearchContainer=styled.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 2px 5px 2px 8px;
    ${mobile({ marginLeft:'10px',display:'none'})}
`
const Input=styled.input`
    border: none;
    outline: none;
    ${mobile({flex:3,fontSize:'18px',fontWeight:400,background:'#f7f7f7'})}
`
const Logo=styled.h1`
font-weight: bold;
font-size: 40px;
${mobile({fontSize:'24px'})}
`
const Center=styled.div`
    flex: 1;
    display: flex;
    justify-content:center;
`
const Right=styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({ flex: 1, justifyContent: 'flex-end' })}
`
const Language=styled.span`
    margin-right: 20px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    ${mobile({display:'none'})}
`

const MenuItem=styled.span`
    font-size:16px;
    margin-left: 10px;
    cursor: pointer;
    font-weight: 700;
    margin-right:1rem;
    ${mobile({fontSize:'12px',marginLeft: "0px",display:'none'})}
`
const MenuItemCart=styled.div`
    
`
const MenuSpan=styled.span`
    display: none;
    ${mobile({display:'block'})};
`
const PopMenuWrap=styled.div`
    display: ${props=>props.display===0?'none':'block'};
    transition: opacity 300ms ease 0s;
    height: 100%;
    z-index: 3;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    background-color:rgba(0,0,0,.5);
    inset: 0;
`
const BurgerMenu=styled.div`
    
        width: 80%;
        height: 100%;
        transition: opacity 300ms ease 0s, transform 500ms ease 0s;
        background-color: white;
        position: absolute;  
        transform: translateX(${props=>props.open===0?'-100%':'0'});
        
        opacity:${props=>props.open===0?0:1};
        color: rgb(51, 51, 51);
        position: relative;
    
    
`;

const MainHead=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid lightgray;
`
const Head=styled.h1`
    
`
const List=styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: flex-start;
    margin-top: 20px;
`
const Links=styled.a`
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    border-top: 1px solid lightgray;
    width: 100%;
    color: black;
    padding: 0 5px;
    height: 50px;
    display: flex;
    align-items: center;

`

const SearchContainerPop=styled.div`
    width: 80%;
    display: flex;
    background-color: #f7f7f7;
    border-radius: 5px;
    padding: 5px 5px 5px 8px;
    margin: 10px auto;
    font-size: 20px;
    font-weight: 600;
    
`

export const Navbar = () => {
    const [display,setDisplay]=useState(0)
    const ShowBurgerM=()=>{
       
            console.log(display)
            setDisplay(display===0?display+1:0)
            console.log(display)
        
    }
    const HideBurgerM=()=>{
        setDisplay(display===1?display-1:1)   
    }
    
  return (
    <Container>
    
       <PopMenuWrap display={display}>
            <BurgerMenu open={display}>
                <MainHead>
                    <Head>Menu</Head>
                    <CloseOutlined onClick={()=>HideBurgerM(0)}/>
                </MainHead>
                <SearchContainerPop>
                    <Input placeholder='Search'/>
                    <Search style={{color:'#969494'}}/>
                </SearchContainerPop>
                <List>
                    <Links>LOG IN</Links>
                    <Links>REGISTER</Links>
                    <Links>SUMMER SALE</Links>
                    <Links>AUTUMN COLLECTION</Links>
                    <Links>LOUNGEWEAR LOVE</Links>
                    <Links>ABOUT US</Links>
                    <Links>HELP</Links>
                </List>
            </BurgerMenu>
        </PopMenuWrap>
      
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search/>
                </SearchContainer>
                <MenuSpan onClick={()=>ShowBurgerM(1)}>
                    <MenuOutlined/>
                </MenuSpan>
               
            </Left>
            <Center>
                <Logo>.MARAH</Logo>
            </Center>
            <Right>
                <MenuItem>
                    <Link to='/login' style={{color:'black',textDecoration:'none'}}>LOG IN</Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/register' style={{color:'black',textDecoration:'none'}}>REGISTER</Link>
                </MenuItem>
                <MenuItemCart>
                    <Link to='/cart' style={{color:'black'}}>
                        <Badge badgeContent={4} color="primary" style={{cursor:'pointer'}}>
                            <ShoppingCartOutlined />
                        </Badge>
                    </Link>
                </MenuItemCart>
                
            </Right>
            

            
        </Wrapper>
    </Container>
    
  )
}
