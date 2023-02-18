export default function Chute({estado, chute, verificar, input}){
    
    return (
        <>
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" disabled={estado} onChange={(e) => chute(e.target.value)} value={input}></input>
            <button data-test="guess-button" disabled={estado} onClick={verificar}>Chutar</button>
        </div>
        </>
    )
}