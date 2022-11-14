import React, { useState } from "react";
import styled from "styled-components";

const StyleDiv = styled.div`
display: flex;

`
const StyledUl = styled.ul`
font-size:20px;
color: white;
padding: 0;
margin-top: 20px;
`
const StyledList = styled.li`
    list-style: none;
    overflow: hidden;
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10;
`
const StyledButton = styled.button`
    float: right;
    background: palevioletred;
    color: #FFF;
    border-radius: 3px;
    border: 2px solid palevioletred;
    padding: 3px 10px;
    outline: none;
    cursor: pointer
`
const StyledInput = styled.input`

  width: 100%;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 20px;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
`



export const ToDoApp = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (todo) => {
        const newTodo = {
            todo: todo,
        };

        // add the todo to the list
        setList([...list, newTodo]);

        // clear input box
        setInput("");
    };

    const deleteAll = () => {
        setList([]);
    };

    return (
        <div>
            <StyleDiv>

                <StyledInput
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <StyledButton onClick={() => addTodo(input)}>Add</StyledButton>
            </StyleDiv>
            <StyledUl>
                {list.map((todo) => (

                    <StyledList>
                        {todo.todo}

                    </StyledList>


                ))}
            </StyledUl>
            <StyledButton onClick={() => deleteAll()}>Eliminar</StyledButton>
        </div>
    );
}
