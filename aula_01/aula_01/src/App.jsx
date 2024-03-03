import React from 'react'
import Exercicio1Adicao from './Componentes/Exercicio1Adicao'
import Exercicio1Subtracao from './Componentes/Exercicio1Subtracao'
import Exercicio1Multiplicacao from './Componentes/Exercicio1Multiplicacao'
import Exercicio1Divisao from './Componentes/Exercicio1Divisao'

const App = () => {
    return (
        <div>
            <Exercicio1Adicao num1={2} num2={5} />
            <Exercicio1Subtracao num1={5} num2={5} />
            <Exercicio1Multiplicacao num1={5} num2={5} />
            <Exercicio1Divisao num1={10} num2={2} />
        </div>
    )
}

export default App