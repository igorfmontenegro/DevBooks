import styled from 'styled-components'
import BackgroundBook from '../../assets/background.png'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundBook});
  background-size: cover;
`

export const BackButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 46px;
  width: 46px;
  cursor: pointer;
  position: fixed;
  left: 20px;
  top: 20px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  padding: 48px;
  overflow-y: scroll;
`

export const Title = styled.h1`
  font-size: 54px;
  margin-bottom: 24px;
`

export const Subtitle = styled.h1`
  font-weight: normal;
  font-size: 36px;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-top: 24px;
  text-align: justify;
`
export const ContainerSpinner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100vh;
`
