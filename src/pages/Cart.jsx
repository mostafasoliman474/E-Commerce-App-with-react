import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import { Announcement } from '../Components/Announcement'

import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'

import { NewsLetter } from '../Components/NewsLetter'
import { mobile } from '../Responsive'
const Container=styled.div``
const Wrapper=styled.div`
    padding: 20px ;
`

const Title=styled.h1`
    text-align:center;
    font-weight: 300;
    ${mobile({marginBottom:'10px'})}
`

const TopLinksContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Center=styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    ${mobile({display:'none'})};
`
const ButtonTop=styled.button`
    background-color: ${props=>props.type==='filled'?'black':'transparent'};
    border: ${props=>props.type==='filled'?'2px solid lightgray':' 2px solid black;'};
    color:${props=>props.type==='filled'?'white':'black'};
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`
const Link=styled.a`
    margin-right:5px;
    text-decoration: underline;
    cursor: pointer;
`
const BottomContainer=styled.div`
    display: flex;
    ${mobile({flexDirection:'column'})};
`

const InformationContainer=styled.div`
    flex: 3;
    
`

const Product=styled.div`
    display: flex;
    margin: 20px 0;
    ${mobile({flexDirection:'column'})}
`

const Image=styled.img`
    flex:1;
    max-width: 35%;
    ${mobile({maxWidth:'35%'})};
`

const Info=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 30px;
`

const ProductName=styled.p``

const ProductID=styled.p``

const ProductSize=styled.p``

const ProductColor=styled.div`

    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
`



const AmmountContainer=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Ammount=styled.span`
    font-size: 30px;
    margin: 0 5px;

`

const Price=styled.p`
    font-size: 30px;
    opacity: .9;
    color: #222222;
`
const Summry=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    
    padding :0 20px;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin-top: 20px;
    ${mobile({paddingBottom:'10px'})}
`

const AddContainer=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Hr=styled.hr`
    height: 1px;
    background-color: lightgray;
    margin: 10px 0;
`
const AddWrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`
const SummryTitle=styled.h1`
    font-weight: 200;
    margin: 20px 0 30px 0;
`
const Information=styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 15px 0;
`
const ValueName=styled.p`
font-weight: ${props=>props.type==='total'?800:400};
font-size: ${props=>props.type==='total'?'24px':'16px'};
    
`
const Value=styled.p`
    font-weight: ${props=>props.type==='total'?800:400};
    font-size: ${props=>props.type==='total'?'24px':'16px'};
`

const ProductInfoContainer=styled.div`
    display: flex;
    flex: 1;
    ${mobile({display:'flex'})}
`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>  
            <TopLinksContainer>
                
                    <ButtonTop>Continue Shopping</ButtonTop>
                
                <Center>
                    <Link>Shopping Bag (2)</Link>
                    <Link>Your Wishlist (0)</Link>
                </Center>
                
                    <ButtonTop type='filled'>Checkout Now</ButtonTop>
                
            </TopLinksContainer>
            <BottomContainer>
                <InformationContainer>
                    <Product>
                        <ProductInfoContainer>
                            <Image src='https://m.media-amazon.com/images/I/41y+qIXxORL._AC_SY535_.jpg'/>
                            <Info>
                                <ProductName><b>Product:</b> RUN bootsElegant Shose</ProductName>
                                <ProductID><b>ID: </b>41247491</ProductID>
                                <ProductColor></ProductColor>
                                <ProductSize><b>Size: </b>37.5</ProductSize>
                            </Info>
                        </ProductInfoContainer>
                        
                        <AmmountContainer>
                            <AddWrapper>
                                <AddContainer>
                                    <Add style={{'cursor':'pointer'}}/>
                                    <Ammount>1</Ammount>
                                    <Remove style={{'cursor':'pointer'}}/>
                                </AddContainer>
                                <Price>$ 50</Price>
                            </AddWrapper>
                        </AmmountContainer>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductInfoContainer>
                            <Image src='https://m.media-amazon.com/images/I/71RDzmXT0cL._AC_SX569_.jpg'/>
                            <Info>
                                <ProductName><b>Product:</b> Cotton Hoodie Zip Side Pockets</ProductName>
                                <ProductID><b>ID: </b>51227411</ProductID>
                                <ProductColor></ProductColor>
                                <ProductSize><b>Size: </b>M</ProductSize>
                            </Info>
                        </ProductInfoContainer>
                        <AmmountContainer>
                            <AddContainer>
                                <Add style={{'cursor':'pointer'}}/>
                                <Ammount>1</Ammount>
                                <Remove style={{'cursor':'pointer'}}/>
                            </AddContainer>
                            <Price>$ 50</Price>
                        </AmmountContainer>
                    </Product>
                </InformationContainer>
                <Summry>
                    <SummryTitle>ORDER SUMMRY</SummryTitle>

                    <Information>
                        <ValueName>Subtotal</ValueName>
                        <Value>$ 80.0</Value>
                    </Information>
                    
                    <Information>
                    <ValueName>Estimated Shipping</ValueName>
                        <Value>$ 5.90</Value>
                    </Information>

                    
                    <Information>
                        <ValueName>Shipping Discount</ValueName>
                        <Value>- $ 5.90</Value>
                    </Information>
                    <Information>
                    <Information>
                        <ValueName type='total'>Total</ValueName>
                        <Value type='total'>$ 80.0</Value>
                    </Information>
                    </Information>
                    <ButtonTop type='filled'>CHECKOUT NOW</ButtonTop>
                </Summry>
            </BottomContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}
export default Cart;
