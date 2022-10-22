import { ProgramState } from "../layout/App";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export default function StateDisplay({state} : {state: ProgramState}) : JSX.Element {

    console.log(state);

    const variablesDisplay = [];

    for(const key in state.state) {
        variablesDisplay.push(
            <p> {key + " : " + state.state[key]}</p>
        );
    }

    return (
        <Container>
            <p> Line Number {state.linenumber} </p>
            {state.error? state.errorCode : variablesDisplay} 
        </Container>
    )

}