import React, { useEffect } from 'react'
import { Container } from './styles'

import scorpion from '../../assets/scorpion.png'
import subzero from '../../assets/subzero.png'
import areaVazia from '../../assets/area-vazia.png'

import Player1 from '../Player1'
import Player2 from '../Player2'
import { useGame } from '../../hooks/Game'
import { temVencedor } from '../../utils'

const Tabuleiro: React.FC = () => {
  const { gameData, fazerJogada } = useGame()

  const { tabuleiro } = gameData

  useEffect(() => {
    const linhaVencedora = temVencedor(tabuleiro)
    if (linhaVencedora !== undefined) {
      console.log(linhaVencedora)
    }
  }, [tabuleiro])

  return (
    <Container>
      <Player1 />
      <div className="tabuleiro">
        {gameData.tabuleiro.map((cell, index) => {
          switch (cell) {
            case 0:
              return (
                <div
                  className="cell"
                  key={`i-${index}`}
                  onClick={() => fazerJogada(index)}
                >
                  <img src={areaVazia} alt="jogada" />
                </div>
              )
            case 1:
              return (
                <div
                  className="cell"
                  key={`i-${index}`}
                  onClick={() => fazerJogada(index)}
                >
                  <img src={subzero} alt="jogada" />
                </div>
              )
            default:
              return (
                <div
                  className="cell"
                  key={`i-${index}`}
                  onClick={() => fazerJogada(index)}
                >
                  <img src={scorpion} alt="jogada" />
                </div>
              )
          }
        })}
      </div>
      <Player2 />
    </Container>
  )
}

export default Tabuleiro
