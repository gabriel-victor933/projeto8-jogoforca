export default function Letras({estado, selecionada, funcao}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="letras">
            {alfabeto.map((p) => <button data-test="letter" key={p} disabled={estado || selecionada.includes(p)} onClick={() => funcao(p)}>{p}</button>)}
        </div>
    )
}