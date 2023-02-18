import styled from "styled-components";

const Divjogo = styled.div`
width: 95vw;
display: flex;
justify-content: space-between;
margin-top: 15px;
`;

const Imagem = styled.img`
width: 400px;
height: 467px;`;

const Botao = styled.button`
width: 200px;
height: 60px;
border-radius: 8px;
background-color: #27AE60;
color: white;
border: none;
margin-top: 20px;
margin-right: 20px;
font-family: "Roboto";
font-size: 20px;
font-weight: 700;
line-height: 23px;
font-style: normal;
`;

const Divword = styled.div`
height: 467px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
`;

const Word = styled.div`
margin-bottom: 90px;
margin-right: 90px;
font-family: "noto Sans";
font-size: 50px;
color: ${props => props.fim == "ganhou"? "green": props.fim == "perdeu"? "red" :  "black"};
`;

const Letras = styled.span`

margin: 5px;
`;

export default function Jogo({imagem, funcao, letras, selecionada, fimJogo}){

    

    return <>
        <Divjogo>  
            <Imagem data-test="game-image" src = {imagem} alt="forca"></Imagem>

            <Divword>
            <Botao data-test="choose-word" onClick={funcao}>Escolher Palavra</Botao>
            <Word data-test="word" fim={fimJogo} >{letras.map((l,index) => <Letras key={index} >{selecionada.includes(l.normalize('NFD').replace(/[\u0300-\u036f]/g, '')) || fimJogo != ""? l : "_"}</Letras>)}</Word>
            </Divword> 

        </Divjogo>
    </>
}