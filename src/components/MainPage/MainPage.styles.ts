import styled from 'styled-components'

export const Container = styled.h1`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 60px;
  font-size: 26px;
  background-color: #ef552b;
  color: #fff;

  @media (max-width: 587px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 20px;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 587px) {
    width: 40px;
    height: 40px;
    left: 10px;
  }
`
