import React from 'react'
import Topbar from './components/Topbar'
import Tabuleiro from './components/Tabuleiro'

import GlobalStyle from './styles/global'
import { GameProvider } from './hooks/Game'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <GameProvider>
        <Topbar />
        <Tabuleiro />
      </GameProvider>
    </>
  )
}

export default App
