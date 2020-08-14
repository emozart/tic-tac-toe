import React, { useState, useEffect } from 'react'
import { Container } from './styles'

import player2 from '../../assets/player-1.jpg'

import { ehVencedor } from '../../utils'
import { useGame } from '../../hooks/Game'

const Player2: React.FC = () => {
  const [vitoria, setVitoria] = useState(false)

  const { gameData } = useGame()
  const { nome, wins } = gameData.playerP2
  const { tabuleiro, vencedor } = gameData

  useEffect(() => {
    const winner = ehVencedor(tabuleiro, vencedor)
    if (winner === 2) {
      setVitoria(true)
    } else {
      setVitoria(false)
    }
  }, [tabuleiro, vencedor])

  return (
    <Container>
      <img src={player2} alt="Player 2" />
      <h2>{nome}</h2>
      <h4>{`Vitórias: ${wins}`}</h4>
      {vitoria && <h1>Vencedor!!!</h1>}
    </Container>
  )
}

export default Player2
