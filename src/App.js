import './style/reset.css';
import './style/style.css';
import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "./palavras"
import forca0 from "./assets/forca0.png"
import { useState } from 'react';

export default function App() {

  const [disabled,setDisabled] = useState(true)
  const [palavra, setPalavra] = useState("")

  function iniciarJogo(){
    setDisabled(false)

    setPalavra(palavras[Math.floor(Math.random()*(palavras.length))])



  }


  return <>
    <Jogo imagem={forca0} funcao={iniciarJogo} palavra={palavra}/>
    <Letras estado ={disabled}/>

  </>

}

