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
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 20px;
  &:hover {
    transform: scale(1.1);
  }
`
