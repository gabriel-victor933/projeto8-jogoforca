import styled from "styled-components";

const Divletras = styled.div`
width: 50vw;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 15px;


@media (max-width: 800px) {
    width: 90vw
  }
`;

const Botao = styled.button`
width: 40px;
height: 40px;
margin: 6px;
border: 1px solid #7AA7C7;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

background-color: ${props => props.disabled ? "#9FAAB5": "#E1ECF4"};
color: ${props => props.disabled ? "#798A9F": "#39739D"}


`;


export default function Letras({estado, selecionada, funcao}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <Divletras>
            {alfabeto.map((p) => <Botao data-test="letter" key={p} disabled={estado || selecionada.includes(p)} onClick={() => funcao(p)}>{p}</Botao>)}
        </Divletras>
    )
}