import React from "react";
import './StyleLotoFacil.css'

export default class LotoFacil extends React.Component {
  constructor() {
    super();
    this.gerarNovosNumeros = this.gerarNovosNumeros.bind(this);
    this.gerarNumeros = this.gerarNumeros.bind(this);

    this.state = {
      numeros: [],
    }
  }

  gerarNovosNumeros(array) {
    const novoNumero = parseInt(Math.random() * (26 - 1)) + 1;
    return array.includes(novoNumero) ? this.gerarNovosNumeros(array) : novoNumero;
  }

  gerarNumeros() {
    const novoArray = Array(15)
      .fill(0)
      .reduce((acc) => [...acc, this.gerarNovosNumeros(acc)], [])
      .sort((a, b) => a - b)
      .join(' - ');
    this.setState(({ numeros }) => ({
      numeros: [...numeros, novoArray],
    }))
  }

  render() {
    const { numeros } = this.state;
    return (
      <>
        <button onClick={this.gerarNumeros} className='btn-loto'></button>
        <ul>
          { numeros.map((array, idx) => <li className='line typing-animation' key={ idx }>Jogo {idx + 1} ====&gt; { array }</li>) }        
        </ul>      
      </>  
    );
  }
}