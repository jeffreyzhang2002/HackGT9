import React from "react";

import Styled from "styled-components";
import Nav from "./Nav";
import HorizontalDivider from "./horizontalDivider/HorizontalDivider";
import CodeEditor from "../components/CodeEditor";
import CodeDisplay from "../components/CodeDisplay";

const Container = Styled.main`
    
    height: 100vh;
    width: 100vw;
    
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5vh 95vh;   
`


export interface ProgramState {
    linenumber: number;
    error: boolean;
    errorCode?: string;
    state?: {
            [key: string] : any
    }
}



export default function App(): JSX.Element {

    const [editMode, setEditMode] = React.useState<boolean>(true);
    const [code, setCode] = React.useState<string>(" ");
    const [state, setState] = React.useState<ProgramState>({linenumber: 0, error: false});
   
    return (
        <Container>
            <Nav editMode={editMode} setEditMode={setEditMode} code={code} state={state} setState={setState}/>
            <HorizontalDivider>
                <CodeEditor editMode={editMode} code={code} setCode={setCode}/>
                <CodeDisplay editMode={editMode} state={state}/>
            </HorizontalDivider>
        </Container>
    );
}