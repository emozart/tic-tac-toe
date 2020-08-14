import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect
} from 'react'
import { temVencedor, ehVencedor } from '../utils'

export interface IPlayer {
  nome: string
  wins: number
}

export interface IScore {
  winsP1: number
  winsP2: number
}

export interface IGameContext {
  tabuleiro: number[]
  playerP1: IPlayer
  playerP2: IPlayer
  turno: 'P1' | 'P2'
  vencedor: number[]
}

interface IGame {
  gameData: IGameContext
  fazerJogada(position: number): void
  resetGame(): void
  updateP1(): void
  updateP2(): void
}

const GameContext = createContext<IGame>({} as IGame)

const GameProvider: React.FC = ({ children }) => {
  const [tabuleiro, setTabuleiro] = useState<number[]>([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ])

  const [playerP1, setPlayerP1] = useState<IPlayer>({
    nome: 'Player 1',
    wins: 0
  })

  const [playerP2, setPlayerP2] = useState<IPlayer>({
    nome: 'Player 2',
    wins: 0
  })

  const [turno, setTurno] = useState('P1')

  const [vencedor, setVencedor] = useState([0, 0, 0])

  const updateP1 = useCallback(() => {
    setPlayerP1({ nome: playerP1.nome, wins: playerP1.wins + 1 })
  }, [playerP1.nome, playerP1.wins])

  const updateP2 = useCallback(() => {
    setPlayerP2({ nome: playerP2.nome, wins: playerP2.wins + 1 })
  }, [playerP2.nome, playerP2.wins])

  const fazerJogada = useCallback(
    (position: number) => {
      const fimDeJogo = temVencedor(tabuleiro).reduce((fim, posicao) => {
        return posicao !== 0
      }, false)
      if (fimDeJogo) return
      if (turno === 'P1') {
        setTabuleiro(() => {
          const newTabuleiro = [...tabuleiro]
          newTabuleiro[position] = 1
          return newTabuleiro
        })
        setTurno('P2')
      } else {
        setTabuleiro(() => {
          const newTabuleiro = [...tabuleiro]
          newTabuleiro[position] = 2
          return newTabuleiro
        })
        setTurno('P1')
      }
    },
    [tabuleiro, turno]
  )

  const resetGame = useCallback(() => {
    setTabuleiro([0, 0, 0, 0, 0, 0, 0, 0, 0])
  }, [])

  useEffect(() => {
    const sequencia = temVencedor(tabuleiro)
    if (sequencia) {
      setVencedor(sequencia)
    }
    if (ehVencedor(tabuleiro, sequencia) === 1) {
      setPlayerP1({ nome: playerP1.nome, wins: playerP1.wins + 1 })
    }
    if (ehVencedor(tabuleiro, sequencia) === 2) {
      setPlayerP2({ nome: playerP2.nome, wins: playerP2.wins + 1 })
    }
  }, [tabuleiro])

  const gameData: IGameContext = {
    tabuleiro,
    playerP1,
    playerP2,
    turno: 'P1',
    vencedor
  }

  return (
    <GameContext.Provider
      value={{
        gameData,
        fazerJogada,
        resetGame,
        updateP1,
        updateP2
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

function useGame(): IGame {
  const context = useContext(GameContext)

  if (!context) {
    throw new Error('useGame must be used within a GameProvider.')
  }

  return context
}

export { GameProvider, useGame }
