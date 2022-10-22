import { ProgramState } from "../layout/App";

function varCommand(nextState: ProgramState, state: ProgramState, tokens: string[]): ProgramState {
    return {linenumber: 0, error: false};
}

function addCommand(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    return {linenumber: 0, error: false};
}

const Commands: {[key: string] : (nextState: ProgramState, state: ProgramState, tokens: string[]) => ProgramState } = {
    "var": varCommand,
    "add": addCommand

}

export default function Interpret(state: ProgramState, line: string): ProgramState  {

    const nextState = {...state};
    nextState.linenumber = state.linenumber + 1;

    const tokens = line.trim().split(/[ ,]+/);
    
    if(tokens.length === 0)
        return nextState;

    console.log(tokens[0].toLocaleLowerCase())

    const funct = Commands[tokens[0].toLowerCase()];
    
    console.log(funct);

    if(funct == undefined) {
        nextState.error = true;
        nextState.errorCode = "Invalid Command "  + line;
        return nextState;
    }

    const temp = funct(nextState, state, tokens)

   return temp;
}
