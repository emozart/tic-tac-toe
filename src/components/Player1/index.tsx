import React, { useState, useEffect } from 'react'
import { Container } from './styles'

import player1 from '../../assets/player-2.jpg'

import { ehVencedor } from '../../utils'
import { useGame } from '../../hooks/Game'

const Player1: React.FC = () => {
  const [vitoria, setVitoria] = useState(false)

  const { gameData } = useGame()
  const { nome, wins } = gameData.playerP1
  const { tabuleiro, vencedor } = gameData

  useEffect(() => {
    const winner = ehVencedor(tabuleiro, vencedor)
    if (winner === 1) {
      setVitoria(true)
    } else {
      setVitoria(false)
    }
  }, [tabuleiro, vencedor])

  return (
    <Container>
      <img src={player1} alt="Player 1" />
      <h2>{nome}</h2>
      <h4>{`Vitórias: ${wins}`}</h4>
      {vitoria && <h1>Vencedor!!!</h1>}
    </Container>
  )
}

export default Player1
