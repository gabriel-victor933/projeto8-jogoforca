import './style/reset.css';
import './style/style.css';
import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"
import palavras from "./palavras"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import { useState } from 'react';

const img = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

export default function App() {

  const [disabled,setDisabled] = useState(true)
  const [palavra, setPalavra] = useState("")
  const [selecionada, setSelecionada] = useState([])
  const [erros,setErros] = useState(0)
  const [imgForca, setImgForca] = useState(img[erros])
  const [fimJogo, setFimjogo] = useState("")
  const [input, setInput] = useState("")
  

  const letras = palavra.split("")
  const letrasNormalizadas = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split("")
  
  

  function iniciarJogo(){
    setDisabled(false)
    setFimjogo("")
    setSelecionada([])
    setErros(0)
    setImgForca(img[0])
    setInput("")

    setPalavra(palavras[Math.floor(Math.random()*(palavras.length))])
  }

  function selecionarLetra(p){

    let novaSelecionada = [...selecionada,p]

    setSelecionada(novaSelecionada)

    if(!letrasNormalizadas.includes(p)){

      let newErros = erros + 1;
      setImgForca(img[newErros])
      setErros(newErros)

      if(newErros == 6){
        setFimjogo("perdeu")
        setDisabled(true)
      }

    } 

    checarFimdeJogo(novaSelecionada)
  }

  function checarFimdeJogo(arr){
    
    let end = true;
    for(let i = 0; i < letrasNormalizadas.length; i++){
      end = end && arr.includes(letrasNormalizadas[i]);
    }

    if(end){
      setFimjogo("ganhou")
      setDisabled(true)
    }
  }

  function chute(p){
    setInput(p)
  }

  function verificarChute(){

    if(input == palavra){
      setFimjogo("ganhou")
    } else {
      setFimjogo("perdeu")
      
    }

    setDisabled(true)
  }

  return <>
    <Jogo imagem={imgForca} funcao={iniciarJogo} letras={letras} selecionada={selecionada} fimJogo={fimJogo}/>
    <Letras estado ={disabled} selecionada={selecionada} funcao={selecionarLetra}/>
    <Chute estado={disabled} chute={chute} verificar={verificarChute} input={input}/>
  </>

}

