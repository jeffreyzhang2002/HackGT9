import { ProgramState } from "../layout/App";

function varCommand(nextState: ProgramState, state: ProgramState, tokens: string[]): ProgramState {

    if(tokens.length != 3) {
        nextState.error = true;
        nextState.errorCode = "Invalid Parameter Count"
        return nextState;
    }

    nextState.state[tokens[1]] = tokens[2];
    return nextState ;
}

function addCommand(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    if(tokens.length === 4 && state.state[tokens[1]] && state.state[tokens[2]] && state.state[tokens[3]])
    {

        if(!isNaN(parseInt(state.state[tokens[2]])) && !isNaN(parseInt(state.state[tokens[3]]))) {
            nextState.state[tokens[1]] = parseInt(state.state[tokens[2]]) + parseInt(state.state[tokens[3]]);
            return nextState;
        }

        nextState.state[tokens[1]] = state.state[tokens[2]] + state.state[tokens[3]];
        return nextState;
    }

    nextState.error = true;
    nextState.errorCode = "Invalid Parameter"
    return nextState;


}

function subCommand(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    if(tokens.length === 4 && state.state[tokens[1]] && state.state[tokens[2]] && state.state[tokens[3]])
    {

        if(!isNaN(parseInt(state.state[tokens[2]])) && !isNaN(parseInt(state.state[tokens[3]]))) {
            nextState.state[tokens[1]] = parseInt(state.state[tokens[2]]) - parseInt(state.state[tokens[3]]);
            return nextState;
        }

        nextState.state[tokens[1]] = state.state[tokens[2]] - state.state[tokens[3]];
        return nextState;
    }

    nextState.error = true;
    nextState.errorCode = "Invalid Parameter"
    return nextState;


}

const Commands: {[key: string] : (nextState: ProgramState, state: ProgramState, tokens: string[]) => ProgramState } = {
    "var": varCommand,
    "add": addCommand,
    "sub": subCommand

}

export default function Interpret(state: ProgramState, line: string): ProgramState  {

    const nextState = {...state};
    nextState.linenumber = state.linenumber + 1;

    const tokens = line.trim().split(/[ ,]+/);
    
    if(tokens.length === 0)
        return nextState;

    const funct = Commands[tokens[0].toLowerCase()];
    
    console.log(funct);

    if(funct === undefined) {
        nextState.error = true;
        nextState.errorCode = "Invalid Command "  + line;
        return nextState;
    }

    const temp = funct(nextState, state, tokens)

   return temp;
}
