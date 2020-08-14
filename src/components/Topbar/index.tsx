import React from 'react'
import player1 from '../../assets/player-1.jpg'
import player2 from '../../assets/player-2.jpg'
import Reset from '../../assets/Player-X.png'

import { Container } from './styles'

import { useGame } from '../../hooks/Game'

const Topbar: React.FC = () => {
  const { resetGame } = useGame()
  return (
    <Container>
      <h4>Tic Tac Toe</h4>

      <div>
        <span className="menu-button" onClick={resetGame}>
          <p>Reset Game</p>
          <img src={Reset} alt="Reset Game" />
        </span>

        <span className="menu-button">
          <img src={player1} alt="Player 1" />
          <p>Player 1</p>
        </span>

        <span className="menu-button">
          <img src={player2} alt="Player 2" />
          <p>Player 2</p>
        </span>
      </div>
    </Container>
  )
}

export default Topbar
