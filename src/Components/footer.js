import styled from "styled-components"

const StyDiv = styled.div `
    background-color: grey;
    padding: 0.01vh 0vh;
    color: white;
    width: 100%;
`

export default function Footer(){
    return(
        <StyDiv>
            <p>Derechos reservados leanKrn</p>
        </StyDiv>
    )
}