import styled from "styled-components";
import { fruitarray } from "@/lib/data";


export default function RenderSection1({fruit}) {
    
    const { title, description, icon, color } = fruit;
    

    const StyledSection = styled.section`
    background-color: ${color};
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    height: 200px;
  `;

   
    
    
    
    return ( <> <StyledH1> {title} </StyledH1>
    <StyledSection>
      <StyledIcon> {icon}</StyledIcon>
    </StyledSection>

    <StyledDescription> {description}</StyledDescription></>)
}

const StyledIcon = styled.div`
font-size: 8em;
text-align: center;
padding: 20px;
`;

const StyledH1 = styled.h1`
text-align: center;
font-size: 3rem;
`;

const StyledDescription = styled.p`
width: 90%;
margin-left: auto;
margin-right: auto;
line-height: 1.3;
margin-top: 20px;
`;