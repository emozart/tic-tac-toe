import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 10vh;
  background-color: gray;

  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
  }

  span {
    display: flex;
    height: 46px;
    padding: 5px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 10px;

    align-items: center;
    align-content: center;
    justify-content: space-between;

    p {
      margin: 5px;
    }
  }

  .menu-button {
    border: 2px solid #777777;
    background-color: #aaaaaa;

    img {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      margin-right: 10px;
    }

    :hover {
      border: 2px solid #555555;
      background-color: #777777;
      cursor: pointer;
    }
  }

  h4 {
    font-size: 45px;
    align-self: center;
    margin-left: 20px;
  }
`
