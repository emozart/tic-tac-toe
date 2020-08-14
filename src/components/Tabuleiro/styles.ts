import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  color: #444;

  .tabuleiro {
    flex: 3;
    display: grid;
    grid-template-areas:
      'cell cell cell'
      'cell cell cell'
      'cell cell cell';
    grid-gap: 20px;
    min-width: 600px;
    height: 90vh;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 10px;

    div {
      display: flex;
      height: 200px;
      width: 200px;
      align-items: center;
      justify-content: center;
      border-style: solid;
      border-width: 2px;
      border-radius: 10px;
      border-color: #444;
      margin: 0 40px;
      padding: 5px;
      box-shadow: 5px 5px 5px 1px black;

      img {
        /* flex: 1; */
        height: 190px;
        width: auto;
      }
    }

    div:hover {
      border-width: 5px;
      box-shadow: 10px 10px 10px 5px black;
    }
  }
`
