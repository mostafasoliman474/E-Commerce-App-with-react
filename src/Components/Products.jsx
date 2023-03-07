import styled from "styled-components";
import { PopularProduct } from "../Data";

import { Product } from "./Product";
const Container=styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
   
`
export const Products = () => {
  return (
    <Container>
        {PopularProduct.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}
