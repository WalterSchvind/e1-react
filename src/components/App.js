import React from "react";
import { ToDoApp } from "./ToDoApp";

import styled from "styled-components";

const Title = styled.h1 `
color:white;
`
const Container = styled.div`
display:flex;
align-items:center;
flex-direction:column;
width: 250px;
margin: 10px auto;
font-family: Arial, Helvetica, sans-serif;
font-size: 13px
`




function App() {
	return (
    
    <Container>
      <Title>ToDoApp</Title>
    {ToDoApp()}
    
    </Container>
	
        
   
	);
}

export default App;
