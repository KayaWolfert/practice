import styled from "styled-components";


export default function RenderSection2({fruit, increase, decrease, count, foodView}){

    const { title, description, icon, color } = fruit;
 
   
  

  
  

  return ( 
    <>
    <StyledSection2>
    <StyledButton onClick={increase}> Add {title} </StyledButton>
    <StyledDisplay>{count}</StyledDisplay>
    <StyledButton onClick={decrease}> Delete {title} </StyledButton>
    </StyledSection2>
    
    <ItemContainer>
      <h3> Your {title}:</h3>
      <StyledItem> {foodView}</StyledItem>
      
       </ItemContainer>
       </>
  )
}

const StyledItem = styled.span`
font-size :2em;

`;

const StyledSection2 = styled.section`
width: 90%;
margin-left: auto;
margin-right: auto;
border-radius: 10px;
display: flex;
justify-content: space-between;
`;





const StyledButton = styled.button`
padding: 10px;
width: 120px;
`;

const StyledDisplay = styled.div`
font-size: 2em;
`;

const ItemContainer = styled.div`
  width: 90%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;


`;
