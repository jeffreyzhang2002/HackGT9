import React from "react";

import Styled from "styled-components";
import Nav from "./Nav";
import HorizontalDivider from "./horizontalDivider/HorizontalDivider";
import CodeEditor from "../components/CodeEditor";
import CodeDisplay from "../components/CodeDisplay";
import Compile from "../compiler/Compiler";

const Container = Styled.main`
    
    height: 100vh;
    width: 100vw;
    
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5vh 95vh;   
`


export interface ProgramState {
    linenumber: number;
    [key: string] : any

}



export default function App(): JSX.Element {

    const [editMode, setEditMode] = React.useState<boolean>(true);
    const [code, setCode] = React.useState<string>(" ");
    const Lines = React.useMemo( () => {code.split("\n")}, [code])
    const [state, setState] = React.useState<ProgramState>({linenumber: 1});

    

    return (
        <Container>
            <Nav editMode={editMode} setEditMode={setEditMode}/>
            <HorizontalDivider>
                <CodeEditor editMode={editMode} code={code} setCode={setCode}/>
                <CodeDisplay editMode={editMode} content={" "}/>
            </HorizontalDivider>
        </Container>
    );
}
