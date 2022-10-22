import { ProgramState } from "../layout/App";

function varCommand(nextState: ProgramState, state: ProgramState, tokens: string[]): ProgramState {

    if(tokens.length !== 3) {
        nextState.error = true;
        nextState.errorCode = "Invalid Parameter Count"
        return nextState;
    }

    if(!isNaN(parseInt(tokens[2])))
        nextState.state[tokens[1]] = parseInt(tokens[2]);
    else
        nextState.state[tokens[1]] = tokens[2];
    return nextState ;
}

function addCommand(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    //console.log("ADD HERE:", tokens.length === 4, " ",  state.state[tokens[1]] != undefined, " ", state.state[tokens[2]], " ", state.state[tokens[3]]);
    if(tokens.length === 4 && state.state[tokens[1]] !== undefined && state.state[tokens[2]] !== undefined && state.state[tokens[3]])
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
    if(tokens.length === 4 && state.state[tokens[1]] !== undefined && state.state[tokens[2]] !== undefined && state.state[tokens[3]])
    {

        if(!isNaN(parseInt(state.state[tokens[2]])) && !isNaN(parseInt(state.state[tokens[3]]))) {
            nextState.error = true;
            nextState.errorCode = "Must be numbers"
            return nextState;
        }

        nextState.state[tokens[1]] = state.state[tokens[2]] - state.state[tokens[3]];
        return nextState;
    }

    nextState.error = true;
    nextState.errorCode = "Invalid Parameter"
    return nextState;
}

function multCommand(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    if(tokens.length === 4 && state.state[tokens[1]] !== undefined && state.state[tokens[2]] !== undefined && state.state[tokens[3]])
    {

        if(!isNaN(parseInt(state.state[tokens[2]])) && !isNaN(parseInt(state.state[tokens[3]]))) {
            nextState.error = true;
            nextState.errorCode = "Must be numbers"
            return nextState;
        }

        nextState.state[tokens[1]] = state.state[tokens[2]] * state.state[tokens[3]];
        return nextState;
    }

    nextState.error = true;
    nextState.errorCode = "Invalid Parameter"
    return nextState;
}

function divCommand(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    if(tokens.length === 4 && state.state[tokens[1]] !== undefined && state.state[tokens[2]] !== undefined && state.state[tokens[3]])
    {

        if(!isNaN(parseInt(state.state[tokens[2]])) && !isNaN(parseInt(state.state[tokens[3]]))) {
            nextState.error = true;
            nextState.errorCode = "Must be numbers"
            return nextState;
        }

        nextState.state[tokens[1]] = state.state[tokens[2]] / state.state[tokens[3]];
        return nextState;
    }

    nextState.error = true;
    nextState.errorCode = "Invalid Parameter"
    return nextState;
}

function GOTOCommand(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    if(tokens.length === 2 && !isNaN(parseInt(tokens[1])))
    {
        nextState.linenumber = parseInt(tokens[1]);
        return nextState;
    }

    nextState.error = true;
    nextState.errorCode = "Invalid Parameter"
    return nextState;
}

function BRGTCommand(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    if(tokens.length === 5 && state.state[tokens[1]] && state.state[tokens[2]] && !isNaN(parseInt(tokens[3])) && !isNaN(parseInt(tokens[4])))
    {

        if(parseInt(state.state[tokens[1]]) > parseInt(state.state[tokens[2]]))
        {
            nextState.linenumber = parseInt(tokens[3]) - 1;
        } else {
            nextState.linenumber = parseInt(tokens[4]) - 1;
        }
        return nextState;
    }

    nextState.error = true;
    nextState.errorCode = "Invalid Parameter"
    return nextState;
}

function BRLTCommand(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    if(tokens.length === 5 && state.state[tokens[1]] && state.state[tokens[2]] && !isNaN(parseInt(tokens[3])) && !isNaN(parseInt(tokens[4])))
    {

        if(parseInt(state.state[tokens[1]]) < parseInt(state.state[tokens[2]]))
        {
            nextState.linenumber = parseInt(tokens[3]) - 1;
        } else {
            nextState.linenumber = parseInt(tokens[4]) - 1;
        }
        return nextState;
    }

    nextState.error = true;
    nextState.errorCode = "Invalid Parameter"
    return nextState;
}

function BRLTEQCommand(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    if(tokens.length === 5 && state.state[tokens[1]] && state.state[tokens[2]] && !isNaN(parseInt(tokens[3])) && !isNaN(parseInt(tokens[4])))
    {

        if(parseInt(state.state[tokens[1]]) <= parseInt(state.state[tokens[2]]))
        {
            nextState.linenumber = parseInt(tokens[3]) - 1;
        } else {
            nextState.linenumber = parseInt(tokens[4]) - 1;
        }
        return nextState;
    }

    nextState.error = true;
    nextState.errorCode = "Invalid Parameter"
    return nextState;
}

function BRGTEQCommand(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    if(tokens.length === 5 && state.state[tokens[1]] && state.state[tokens[2]] && !isNaN(parseInt(tokens[3])) && !isNaN(parseInt(tokens[4])))
    {

        if(parseInt(state.state[tokens[1]]) >= parseInt(state.state[tokens[2]]))
        {
            nextState.linenumber = parseInt(tokens[3]) - 1;
        } else {
            nextState.linenumber = parseInt(tokens[4]) - 1;
        }
        return nextState;
    }

    nextState.error = true;
    nextState.errorCode = "Invalid Parameter"
    return nextState;
}

function BREQCommand(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    if(tokens.length === 5 && state.state[tokens[1]] && state.state[tokens[2]] && !isNaN(parseInt(tokens[3])) && !isNaN(parseInt(tokens[4])))
    {
        if(state.state[tokens[1]] === state.state[tokens[2]])
        {
            nextState.linenumber = parseInt(tokens[3]) - 1;
            console.log("Line Number:" , nextState.linenumber)
        } else {
            nextState.linenumber = parseInt(tokens[4]) - 1;
        }
        return nextState;
    }

    nextState.error = true;
    nextState.errorCode = "Invalid Parameter"
    return nextState;
}

function EMPTY(nextState: ProgramState, state: ProgramState, tokens: string[]) : ProgramState {
    return nextState;
}


const Commands: {[key: string] : (nextState: ProgramState, state: ProgramState, tokens: string[]) => ProgramState } = {
    "var": varCommand,
    "add": addCommand,
    "sub": subCommand,
    "mult": multCommand,
    "div": divCommand,
    "goto": GOTOCommand,
    "brgt": BRGTCommand,
    ">": BRGTCommand,
    "breq": BREQCommand,
    "==": BREQCommand,
    "brlt": BRLTCommand,
    "<": BRLTCommand,
    "brlteq": BRLTEQCommand,
    "<=": BRLTEQCommand,
    "brgteq": BRGTEQCommand,
    ">=": BRGTEQCommand,
    "": EMPTY,

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
