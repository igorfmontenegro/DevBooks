import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 97vh;
  padding: 20px 20px 160px 20px;

  h1 {
    margin-bottom: 24px;
    color: #222;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 22px;
    }
  }
`

export const Logo = styled.img`
  width: 170px;
  margin-bottom: 20px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  width: 100%;
`

export const SearchButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  height: 48px;
  margin-left: 8px;
  padding: 0 12px;
  border-radius: 32px;
  border: none;
  background-color: #ef552b;
  cursor: pointer;
  transition: 0.5s all;

  &:hover {
    filter: brightness(90%);
  }
`

export const BaseBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  height: 3vh;
  background-color: #ef552b;
  color: #fff;

  @media (max-width: 768px) {
    p {
      font-size: 14px;
    }
  }
`
