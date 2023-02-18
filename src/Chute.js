import styled from "styled-components";

const Input = styled.section`
width: 50vw;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 15px;

@media (max-width: 800px) {
    width: 90%;
  }
`;

const Para = styled.p`
font-family: "Roboto";
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
`;

const Entrada = styled.input`
width: 353px;
height: 40px;

background: #FFFFFF;
border: 1px solid #CCCCCC;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
border-radius: 3px;

font-size: 20px;

@media (max-width: 800px) {
    width: 70%;
  }
`;

const Botao = styled.button`
width: 100px;
height: 40px;
border: 1px solid #7AA7C7;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

background: ${props => props.disabled? "#9FAAB5": "#E1ECF4"};
color: ${props => props.disabled? "#798A9F": "#3c76a1"};
`;


export default function Chute({estado, chute, verificar, input}){
    
    return (
        <>
        <Input>
            <Para>Já sei a palavra!</Para>
            <Entrada data-test="guess-input" disabled={estado} onChange={(e) => chute(e.target.value)} value={input}></Entrada>
            <Botao data-test="guess-button" disabled={estado} onClick={verificar}>Chutar</Botao>
        </Input>
        </>
    )
}