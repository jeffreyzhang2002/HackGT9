import { ProgramState } from "../layout/App";

export default function StateDisplay({state} : {state: ProgramState}) : JSX.Element {

    console.log(state);

    return (
        <div>
            stuff here
            {state.error + ""}
        </div>
    )

}