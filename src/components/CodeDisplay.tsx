import React from "react";
import Styled from "styled-components";

const Container = Styled.div`

    width: 100%;
    height: 100%;

    padding: 1rem 0.5rem;
    
    font-size: 16px;
`

const FragmentContainer = Styled.div`

    width: 100%;
    height: fit-content;
    min-height: 1.5rem;
    display: flex;
    font-family: monospace;
    font-size: 16px;
    
    align-items: stretch;
    
`

const FragmentLine = Styled.div`
     
    width: 1.5em;


    text-align: center;
    font-family: monospace;
    background-color: #f2f2f2;
    border-right: 1px solid #e6e6e6;
    
    user-select: none; 
    -moz-user-select: none; 
    -khtml-user-select: none; 
`

export default function CodeDisplay() {

    return (
        <Container>
            test
        </Container>
    );
}
