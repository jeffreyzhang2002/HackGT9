import React from "react";
import Styled from "styled-components";

import Gears from "./../assets/Gears.png";
import { ProgramState } from "./App";
import Interpret from "../compiler/Interpret";

const Container = Styled.nav`
    display: flex;    
    box-shadow: 1px 2px 2px 2px rgba(20,20,20,0.4);
`

const Alignment = Styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 0.5em;
    align-items: center;
`

const Title = Styled.h1`
    width: fit-content;
    height: fit-content;
    margin: 0;
    padding: 0;
      
`
interface ButtonProps {
    readonly isEnabled?: boolean
}

const Button = Styled.button<ButtonProps>`

    margin: 0.3em;
    min-width: 50px;
    padding: 0.2em;
    font-size: 1.1em;
    
    background-color: white;
    border: none;
  
    text-decoration: ${(props) => props.isEnabled !== undefined? "underline" : "none"};
    text-decoration-color: ${(props) => props.isEnabled === true? "#90EE90" : "red"};
  
    &:hover {  
        text-decoration: underline;
    }

`

const Icon = Styled.div`

    aspect-ratio: 1 / 1;
    
    height: 100%;

    background-image: url(${Gears});

    background-size: cover;
    
   
   @keyframes rotate {
   
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(359deg);
    }
   
   }
   
    &:hover {
        animation: rotate 2s infinite linear;
    }
`

export default function Nav({editMode, setEditMode, code, state, setState} : {editMode: boolean, setEditMode: (mode: boolean) => void, code: string, state: ProgramState, setState: (state: ProgramState) => void}) : JSX.Element {

    const [lines, setLines] = React.useState<string[]>([]);

    const onToggleMode = () => {
        setEditMode(!editMode);
        if(editMode)
            setLines(code.split("\n"));
    }

    const onStep = () => {

        if(state.linenumber < lines.length) {
            setState(Interpret(state, lines[state.linenumber]));
        }
    }

    return (
        <Container>
            <Alignment style={{flexDirection: "row"}}>
                <Icon/>
                <Title> Interpreter </Title>
            </Alignment>
            <Alignment style={{flexDirection: "row-reverse"}}>
                <Button onClick={onToggleMode}>
                    {editMode? "Mode: Edit" : "Mode: Run"}
                </Button>
                {
                    !editMode? 
                        <>
                            <Button>
                                Run
                            </Button>
                            <Button onClick={onStep}>
                                Step
                            </Button>
                            <Button onClick={() => setState({linenumber: 0, error: false})}>
                                Reset
                            </Button>
                        </> 
                    :
                        <></>
                }
            </Alignment>
        </Container>
    )

}
