export default function Letras({estado}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="letras">
            {alfabeto.map((p) => <button key={p} disabled={estado} onClick={() => console.log(p)}>{p}</button>)}
        </div>
    )
}