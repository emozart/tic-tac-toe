export function temVencedor(tabuleiro: number[]): number[] {
  const sequenciasDeVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
  ]

  for (let i = 0; i < 8; i += 1) {
    if (
      tabuleiro[sequenciasDeVitoria[i][0]] ===
      tabuleiro[sequenciasDeVitoria[i][1]] &&
      tabuleiro[sequenciasDeVitoria[i][1]] ===
      tabuleiro[sequenciasDeVitoria[i][2]] &&
      tabuleiro[sequenciasDeVitoria[i][0]] !== 0
    ) {
      return sequenciasDeVitoria[i]
    }
  }

  return [0, 0, 0]
}

export function ehVencedor(tabuleiro: number[], sequencia: number[]): number {
  if (sequencia[0] === 0 && sequencia[1] === 0 && sequencia[2] === 0) {
    return 0
  }
  if (
    tabuleiro[sequencia[0]] === 1 &&
    tabuleiro[sequencia[1]] === 1 &&
    tabuleiro[sequencia[2]] === 1
  ) {
    return 1
  }
  if (
    tabuleiro[sequencia[0]] === 2 &&
    tabuleiro[sequencia[1]] === 2 &&
    tabuleiro[sequencia[2]] === 2
  ) {
    return 2
  }
  return 0
}
