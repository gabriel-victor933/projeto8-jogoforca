

export default function Jogo({imagem, funcao, palavra}){

    const letras = palavra.split("")

    return <>
        <div className="jogo">  
            <img src = {imagem} alt="forca"></img>

            <div>
            <button onClick={funcao}>Escolher Palavra</button>
            <div className="word">{letras.map((l) => <span>_</span>)}</div>
            </div> 

        </div>
    </>
}