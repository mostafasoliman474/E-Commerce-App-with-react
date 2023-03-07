import styled from "styled-components";
import { Categorical } from "../Data";
import { mobile } from "../Responsive";
import { CategoriesItem } from "./CategoriesItem";


const Container=styled.div`
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
    ${mobile({flexDirection:'column'})}
`
export const Categories = () => {
  return (
    <Container>
        {Categorical.map((item)=>(
            <CategoriesItem item={item}/>
        )
        )}
    </Container>
  )
}
