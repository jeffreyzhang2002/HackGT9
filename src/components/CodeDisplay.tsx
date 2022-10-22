import React from "react";
import Styled from "styled-components";
import { ProgramState } from "../layout/App";
import HelpScreen from "./HelpScreen";
import StateDisplay from "./StateDisplay";

const Container = Styled.div`
    width: 100%;
    height: 100%;

    padding: 1rem 0.5rem;
    white-space: pre-wrap;
    font-size: 16px;
`

export default function CodeDisplay({state, editMode}: {state: ProgramState, editMode: boolean}) {

    return (
        <Container>
            {editMode? <HelpScreen/> : <StateDisplay state = {state}/>}   
        </Container>
    );
}
