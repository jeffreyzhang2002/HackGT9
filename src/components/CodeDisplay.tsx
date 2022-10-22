import React from "react";
import Styled from "styled-components";
import HelpScreen from "./HelpScreen";

const Container = Styled.div`
    width: 100%;
    height: 100%;

    padding: 1rem 0.5rem;
    white-space: pre-wrap;
    font-size: 16px;
`



export default function CodeDisplay({content, editMode}: {content: string | undefined, editMode: boolean}) {

    return (
        <Container>
            {editMode? <HelpScreen/> : <div> </div> }
        </Container>
    );
}
