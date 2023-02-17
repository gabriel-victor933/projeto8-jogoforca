

export default function Jogo({imagem, funcao, letras, estado, selecionada, fimJogo}){

    

    return <>
        <div className="jogo">  
            <img data-test="game-image" src = {imagem} alt="forca"></img>

            <div>
            <button data-test="choose-word" onClick={funcao} disabled={estado}>Escolher Palavra</button>
            <div data-test="word" className={`word ${fimJogo}`} >{letras.map((l) => <span>{selecionada.includes(l) || fimJogo != ""? l : "_"}</span>)}</div>
            </div> 

        </div>
    </>
}