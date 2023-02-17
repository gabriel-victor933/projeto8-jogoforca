export default function Chute({estado}){
    
    return (
        <>
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" disabled={estado}></input>
            <button data-test="guess-button" disabled={estado}>Chutar</button>
        </div>
        </>
    )
}