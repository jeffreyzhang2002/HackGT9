import Styled from "styled-components"

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
const Title = Styled.h1`
    
`

const HelpValue = Styled.div`
    

`

export default function HelpScreen(): JSX.Element {

    return (
        <Container>
            <Title> Language Spec </Title>
            <HelpValue> Var: declare variable </HelpValue>
            <HelpValue> Add: declare variable </HelpValue>
        </Container>
    )

}